"use client"
import useSettingsFilter from "@/shared/hooks/useSettingsFilter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { UserProfile } from "@clerk/nextjs";
import { Clipboard } from "lucide-react";
import useGetMembership from '@/shared/hooks/useMembership';
import { useState,useEffect} from "react";
import Cookies from "js-cookie";
import { generateApiKey } from "@/shared/utils/tokenGenerator";
import toast from "react-hot-toast";
import { regenerateApiKey } from '../../shared/utils/tokenGenerator';
import { Repeat2 } from "lucide-react";
const SettingsTab = () => {
  const { data } = useGetMembership();
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const apiKey = Cookies.get("api_key");
    if (!apiKey) {
      generateApiKeyHandler();
    } else {
      setApiKey(apiKey);
    }
  }, []);

  const generateApiKeyHandler = async () => {
    await generateApiKey().then((res: any) => {
      Cookies.set("api_key", res);
      setApiKey(res);
    });
  };

  const handleCopy = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        toast.success("Copied");
      });
    }
  };

  const handleRegenerateApiKey = async () => {
    await regenerateApiKey().then((res: any) => {
      Cookies.set("api_key", res);
      setApiKey(res);
      toast.success("API Key updated!");
    });
  };


  return (
    <Tabs defaultValue="apiAccess" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="apiAccess">API</TabsTrigger>
        <TabsTrigger value="customizeProfile">Profile</TabsTrigger>
      </TabsList>
      <TabsContent value="apiAccess">
      <div className="p-4 w-full overflow-hidden">
              <h2 className="font-bold">API KEY:</h2>
              <p className="whitespace-pre-line overflow-hidden break-words copy-text">
                {apiKey}
              </p>
              <div className="flex items-center">
                <div
                  className="h-[38px] w-[90px] rounded my-3 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                  onClick={handleCopy}
                >
                  <Clipboard />
                  <span className="pl-1">copy</span>
                </div>
                <div
                  className="h-[38px] w-[120px] ml-4 rounded my-3 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                  onClick={handleRegenerateApiKey}
                >
                  <Repeat2 />
                  <span className="pl-1">Regenerate</span>
                </div>
              </div>
            </div>
      </TabsContent>
      <TabsContent value="customizeProfile" className="bg-blue">
        <div className="w-full flex mx-auto bg-blue justify-center">
          <UserProfile />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTab;