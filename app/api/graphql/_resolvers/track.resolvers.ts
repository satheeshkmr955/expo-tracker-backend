import { Resolvers } from "@/gql/types";

import { createTrack, getTracks } from "@/services/track.service";

export const TrackResolvers: Resolvers = {
  Query: {
    getTracks: async (_, { input }, { user }) => {
      const responseObj = await getTracks({ input, user });
      return responseObj;
    },
  },
  Mutation: {
    createTrack: async (_, { input }, { user }) => {
      const responseObj = await createTrack({ input, user });
      return responseObj;
    },
  },
};
