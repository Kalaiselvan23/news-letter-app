"use client";

import SettingsTab from "@/components/tabs/SettingsTabs";
import useGetMembership from "@/shared/hooks/useMembership";
import useSettingsFilter from "@/shared/hooks/useSettingsFilter";
import { UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  generateApiKey,
  regenerateApiKey,
} from "@/shared/utils/tokenGenerator";
import toast from "react-hot-toast";
import { Clipboard } from "lucide-react";
import { Repeat2 } from "lucide-react";

const Page = () => {
  const { activeItem } = useSettingsFilter();
  const { data } = useGetMembership();
  const [apiKey, setApiKey] = useState("");

  // useEffect(() => {
  //   const apiKey = Cookies.get("api_key");
  //   if (!apiKey) {
  //     generateApiKeyHandler();
  //   } else {
  //     setApiKey(apiKey);
  //   }
  // }, []);

 




  return (
    <div className="w-[85%] p-5">
      <SettingsTab />
    
      {activeItem === "API Access" && (
        <div>
          {/* {data?.plan === "LAUNCH" ? ( */}
            <div className="w-full h-[90vh] flex items-center justify-center">
              <h3>
                Please update your subscription plan to get access of API.
              </h3>
            </div>
          {/* )
          )} */}
        </div>
      )}
    </div>
  );
};

export default Page;