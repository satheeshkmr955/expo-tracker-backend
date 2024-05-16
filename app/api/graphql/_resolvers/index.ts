import _ from "lodash";

import { Resolvers } from "@/gql/types";

import { UsersResolvers } from "./user.resolvers";
import { TrackResolvers } from "./track.resolvers";

export const RootResolvers: Resolvers = _.merge(
  {},
  UsersResolvers,
  TrackResolvers
);
