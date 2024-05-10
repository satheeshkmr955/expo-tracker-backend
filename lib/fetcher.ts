import axios, { AxiosError, AxiosResponse } from "axios";

import { triggerToast } from "@/lib/utils";
import { Error, Success, TriggerToastProps } from "@/app/_types";

export const publicAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
});

publicAxios.interceptors.response.use(
  function (response: AxiosResponse) {
    const data = response.data as Success;
    triggerToast(data?.toast as TriggerToastProps);
    return response;
  },
  function (error: AxiosError) {
    const data = error.response?.data as Error;
    triggerToast(data?.toast as TriggerToastProps);
    return Promise.reject(error);
  }
);
