"use client";

import React, { useEffect } from "react";
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HOME, SIGN_IN } from "@/constants/route.constants";

const SignOut = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading") {
      if (session === null) {
        window?.ReactNativeWebView?.postMessage?.(JSON.stringify(session));
      }
    }
  }, [session, status]);

  const onClickSignOut = () => {
    signOut();
  };

  return (
    <div>
      <Button
        className="mt-2 cursor-pointer justify-start pl-0"
        asChild
        variant={"ghost"}
        onClick={onClickSignOut}
      >
        <div className="flex">
          <LogOutIcon className="w-[17px] text-gray-400 ml-[10px]" />
          <div className="ml-7 text-gray-600 capitalize">sign out</div>
        </div>
      </Button>
    </div>
  );
};

export default SignOut;
