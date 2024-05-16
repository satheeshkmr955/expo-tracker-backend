import { NOT_AUTHORIZED, USER_NOT_FOUND } from "@/constants/message.constants";
import { NotAuthorized, UserNotFound } from "@/lib/errors";
import { db } from "@/lib/db";

import { GetSelfByNameProps, GetUserByNameProps } from "@/app/_types";

export const getUserByName = async (inputObj: GetUserByNameProps) => {
  const { input } = inputObj;
  const { name } = input || {};

  return await db.user.findFirst({
    where: {
      slugName: name,
    },
  });
};
export const getSelfByName = async (inputObj: GetSelfByNameProps) => {
  const { input, user } = inputObj;

  const { name } = input || {};

  const userByName = await getUserByName({ input: { name } });

  if (!userByName) {
    throw UserNotFound(USER_NOT_FOUND);
  }

  if (user!.name !== userByName.name) {
    throw NotAuthorized(NOT_AUTHORIZED);
  }

  return userByName;
};
