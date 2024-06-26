import { NextRequest } from "next/server";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

import { Toast, ToastTypes, TriggerToastProps } from "@/app/_types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function triggerToast(mayBeToast: TriggerToastProps) {
  if (mayBeToast !== undefined) {
    const toastObj = mayBeToast as Toast;
    const toastByType = toast[
      toastObj.type as ToastTypes
    ] as typeof toast.success;
    toastByType(toastObj.text);
  }
}

export async function jsonParse(req: NextRequest) {
  let jsonBody: any = {};
  try {
    jsonBody = await req.json();
  } catch (error) {
    jsonBody = {};
  }
  return jsonBody;
}
