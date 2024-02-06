import { RecentJobDataType } from "@/types/responseType";
import Image from "next/image";

interface DescriptionListProps {
    jobData:RecentJobDataType
}
export default function DescriptionList({jobData}:DescriptionListProps){
    return(
        <div className="w-full rounded-md flex items-center gap-x-2 bg-[#F9F9F9] px-2 py-4 my-4">
            <Image src="/images/profile.png" height={40} width={40} alt="profile" className="rounded-full" />
            <div>
                <p className="font-bold leading-[1.1]">{jobData.title}<br className="m-0"/><span className="font-normal text-[12px]">{jobData.description} - {jobData.postedDate}</span></p>
     
            </div>
           </div>
    )
}