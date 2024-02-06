import TextAvatar from "@/components/avatar";
import BasicCard from "@/components/card/basiccard";
import CertificationList from "@/components/list/certificationlist";
import ScheduleList from "@/components/list/schedulelist";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { MdCollectionsBookmark } from "react-icons/md";

export default function CertificationSection(){
    return(
        <div className="flex flex-col lg:flex-row !mt-7 m-auto w-full max-w-[1200px]">
        <div className="flex-[1]  px-2">
          <BasicCard className="h-[316px]">
            <p className="font-bold text-[18px] mb-5">Reporting Authority</p>
            {/* overflow-x-scroll w-full max-w-[600px] */}
            <div className="flex items-center justify-center gap-x-8  w-full max-w-[600px]">
              <TextAvatar
              name="John Doe"
              position="Manager"
              />
              <TextAvatar
              name="John Doe"
              position="Senior Manager"
              />
               <TextAvatar
              name="John Doe"
              position="HR Department"
              />
            </div>
          </BasicCard>
          <BasicCard className="h-[477px] mt-5 overflow-y-auto">
            <p className="font-bold text-[18px] mb-5">Cerifications</p>
           <CertificationList/>
           <CertificationList/>
           <CertificationList/>
           <CertificationList/>
 
          </BasicCard>
        </div>
        <div className="flex-[0.9]  px-2">
          <BasicCard className="">
          <div className="flex items-center mb-5">
          <p className="font-bold text-[18px]  flex-1">SourceCode</p>
          <p className="">Facebook</p>
          </div>
          <BasicCard className="pt-9 pb-10 px-5">
          <div className="flex items-center ">
          <Image src="/images/profile.png" height={30} width={30} alt="profile" className="rounded-full mr-2" />
          <p className="font-bold text-[18px]  flex-1">SourceCode</p>
          <BsThreeDots size={25} />
          </div>
          <div className="w-full ">
          <Image src="/images/profile.png" height={300} width={300} alt="profile" className="rounded-md mt-5 w-full" />
          </div>
          <div className="flex mt-5 items-center">
            <div className="flex-1 flex gap-x-4 items-center px-2">
            <IoMdHeart size={30} />
            <FaRegComment size={30} />
            <FiSend size={30} />
            </div>
            <div className="">
            <MdCollectionsBookmark size={30} />
            </div>
          </div>
          <p className="mt-4 text-[16px] font-bold">SourceCode</p>
          <p className="text-[#808080] text-[16px] mt-3"> View all 145 comments</p>
          </BasicCard>
          </BasicCard>
        </div>
      </div>
    )
}