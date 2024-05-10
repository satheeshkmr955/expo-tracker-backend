import axios from "axios";

import { SIGNUP_EXISTS } from "@/constants/api.constants";
import { publicAxios } from "@/lib/fetcher";
import { Success, Error, SignupInput } from "@/app/_types";

import type { AxiosResponse } from "axios";
import { POST } from "@/constants/message.constants";

export type SignUpApiProps = {
  body: SignupInput;
  onSuccess: (data: Success, statusCode: number) => void;
  onError: (error: Error | Success, statusCode: number) => void;
};

export const signUpApiHandler = async (obj: SignUpApiProps) => {
  const { body, onSuccess, onError } = obj;

  try {
    const response: AxiosResponse = await publicAxios({
      data: body,
      url: SIGNUP_EXISTS,
      method: POST,
    });
    onSuccess?.(response.data, response.status);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      onError?.(error.response?.data, error.response?.status!);
    } else {
      console.error(error);
    }
  }
};
