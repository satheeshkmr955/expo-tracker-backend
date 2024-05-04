import { toast } from "sonner";
import type { GraphQLErrorExtensions } from "graphql/error";

import {} from "@/gql/types";

export interface Success {
  toast?: Toast;
  isEmailExists?: boolean;
}

export interface Error {
  errors?: Errors;
  toast?: Toast;
}

export type ToastTypes = keyof Pick<
  typeof toast,
  "success" | "info" | "warning" | "error"
>;

export interface CustomerExtensions extends GraphQLErrorExtensions {
  toast?: Toast;
}

export interface Toast {
  text?: string;
  type?: ToastTypes;
}

export interface Errors {
  name?: string[];
  email?: string[];
  password?: string[];
}

export type SignupInput = {
  email: string;
  password: string;
  name: string;
};

export interface CurrentUser {
  id: string;
  name: string | null;
  slugName: string | null;
}
