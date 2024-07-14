"use client"
import Emaileditor from "@/components/editor/Emaileditor";
import Link from "next/link";
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react";
const Page = () => {
  const searchParams=useSearchParams();
  const subject:string=searchParams.get('subject')!;
  const subjectTitle=subject.replace(/-/g," ");
  

  return (
    <div className="w-full flex bg-[#f7f7f7]">
      <div className="w-full p-5 bg-white rounded-r-xl">
        <Link href="/dashboard/write" className="opacity-[.7] w-min flex text-xl items-center">
        <ArrowLeft />
        {/* <span>Exit</span> */}
        </Link>
        <div className="my-5">
          <Emaileditor subjectTitle={subjectTitle}/>
        </div>
      </div>
    </div>
  )
}

export default Page
