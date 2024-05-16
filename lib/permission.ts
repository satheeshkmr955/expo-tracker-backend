import { shield, rule } from "graphql-shield";
import { GraphQLError } from "graphql";

import { NotAuthorized } from "@/lib/errors";
import {
  NOT_AUTHORIZED,
  SOMETHING_WENT_WRONG,
} from "@/constants/message.constants";

const isAuthenticated = rule({ cache: "contextual" })(
  async (parent, args, ctx, info) => {
    if (!ctx.user) {
      return NotAuthorized(NOT_AUTHORIZED);
    }
    return ctx.user !== null;
  }
);

export const permissions = shield(
  {
    Query: {
      getSelfByName: isAuthenticated,
      getTracks: isAuthenticated,
    },
    Mutation: {
      createTrack: isAuthenticated,
    },
  },
  {
    fallbackError: (thrownThing, parent, args, context, info) => {
      if (thrownThing instanceof GraphQLError) {
        return thrownThing;
      }

      return new GraphQLError(SOMETHING_WENT_WRONG);
    },
  }
);
