import { GraphQLError } from "graphql";
import { CustomerExtensions } from "@/app/_types";

export const NotFound = (message: string) => {
  const extensions: CustomerExtensions = {
    code: "NOT_FOUND",
    toast: {
      text: message,
      type: "error",
    },
  };

  return new GraphQLError(message, {
    extensions,
  });
};

export const InvalidInput = (message: string) => {
  const extensions: CustomerExtensions = {
    code: "INVALID_INPUT",
    toast: {
      text: message,
      type: "error",
    },
  };

  return new GraphQLError(message, {
    extensions,
  });
};

export const InvalidToken = (message: string) => {
  const extensions: CustomerExtensions = {
    code: "INVALID_TOKEN",
    toast: {
      text: message,
      type: "error",
    },
  };

  return new GraphQLError(message, {
    extensions,
  });
};

export const UserNotFound = (message: string) => {
  const extensions: CustomerExtensions = {
    code: "USER_NOT_FOUND",
    toast: {
      text: message,
      type: "error",
    },
  };

  return new GraphQLError(message, {
    extensions,
  });
};

export const NotAuthorized = (message: string) => {
  const extensions: CustomerExtensions = {
    code: "NOT_AUTHORIZED",
    toast: {
      text: message,
      type: "error",
    },
  };

  return new GraphQLError(message, {
    extensions,
  });
};
