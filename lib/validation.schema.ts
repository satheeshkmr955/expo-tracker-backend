import { z } from "zod";

import {
  EMAIL_NOT_VALID,
  EMAIL_REQUIRED,
  NAME_REGEX,
  NAME_REQUIRED,
  PASSWORD_CONFIRM_REQUIRED,
  PASSWORD_NOT_MATCH,
  PASSWORD_REGEX,
  PASSWORD_REQUIRED,
} from "@/constants/message.constants";

// Minimum 1 character,
export const userNameValidation = new RegExp(
  /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/
);

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
export const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const signInSchema = z.object({
  email: z.string().min(1, { message: EMAIL_REQUIRED }).email(EMAIL_NOT_VALID),
  password: z.string().min(1, { message: PASSWORD_REQUIRED }),
});

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: NAME_REQUIRED,
      })
      .regex(userNameValidation, {
        message: NAME_REGEX,
      }),
    email: z
      .string()
      .min(1, { message: EMAIL_REQUIRED })
      .email(EMAIL_NOT_VALID),
    password: z
      .string()
      .min(1, { message: PASSWORD_REQUIRED })
      .regex(passwordValidation, {
        message: PASSWORD_REGEX,
      }),
    confirm: z.string().min(1, { message: PASSWORD_CONFIRM_REQUIRED }),
  })
  .refine((data) => data.password === data.confirm, {
    message: PASSWORD_NOT_MATCH,
    path: ["confirm"],
  });

export const signUpApiSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: NAME_REQUIRED,
    })
    .regex(userNameValidation, {
      message: NAME_REGEX,
    }),
  email: z.string().min(1, { message: EMAIL_REQUIRED }).email(EMAIL_NOT_VALID),
  password: z
    .string()
    .min(1, { message: PASSWORD_REQUIRED })
    .regex(passwordValidation, {
      message: PASSWORD_REGEX,
    }),
});

export const checkEmailsExistsSchema = z.object({
  email: z.string().min(1, { message: EMAIL_REQUIRED }).email(EMAIL_NOT_VALID),
});

export const LocationSchema = z.object({
  timestamp: z.number(),
  latitude: z.number(),
  longitude: z.number(),
  altitude: z.number(),
  accuracy: z.number(),
  heading: z.number(),
  speed: z.number(),
});

export const CreateTrackInputSchema = z.object({
  name: z.string(),
  locations: z.array(LocationSchema),
});
