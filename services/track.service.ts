import { db } from "@/lib/db";
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  PAGINATION,
} from "@/constants/pagination.constants";
import { InvalidInput } from "@/lib/errors";
import { CreateTrackInputSchema } from "@/lib/validation.schema";

import type { Prisma } from "@prisma/client";
import { CreateTrackProps, GetTracksProps } from "@/app/_types";

export const getTracks = async (inputObj: GetTracksProps) => {
  const { input } = inputObj;

  const pagination = PAGINATION;

  let defaultLimit = DEFAULT_LIMIT;
  let defaultPage = DEFAULT_PAGE;

  let { limit, page } = input || {};
  if (typeof limit === "number") {
    defaultLimit = limit;
  }
  if (typeof page === "number") {
    defaultPage = page;
  }

  pagination["totalRecords"] = await db.track.count();
  pagination["currentLimit"] = defaultLimit;
  pagination["currentPage"] = defaultPage;

  const query: Prisma.TrackFindManyArgs = {
    skip: defaultPage * defaultLimit,
    take: defaultLimit + 1,
    include: {
      user: true,
      locations: true,
    },
    orderBy: { createdAt: "desc" },
  };

  const tracks = await db.track.findMany(query);

  if (tracks.length > defaultLimit) {
    pagination["hasNextPage"] = true;
    tracks.splice(-1);
  }

  return { items: tracks, pagination };
};

export const createTrack = async (inputObj: CreateTrackProps) => {
  const { input, user } = inputObj;

  const result = CreateTrackInputSchema.safeParse(input);
  if (!result.success) {
    throw InvalidInput(
      JSON.stringify({ errors: result.error.formErrors.fieldErrors })
    );
  }

  const { locations, name } = input;

  const track = await db.track.create({
    data: {
      name,
      userId: user?.id!,
      locations: {
        createMany: {
          data: locations,
        },
      },
    },
    include: {
      locations: true,
    },
  });

  return track;
};
