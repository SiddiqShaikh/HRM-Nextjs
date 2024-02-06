'use client'
import BasicCard from "@/components/card/basiccard";
import PieChart from "@/components/chart/piechart";
import DescriptionList from "@/components/list/desclist";
import ScheduleList from "@/components/list/schedulelist";
import Loader from "@/components/loader";
import SelectList from "@/components/select";
import { RecentJobDataType } from "@/types/responseType";
import { JobData } from "@/utils/mock";
import { useEffect, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";

export default function Announcement() {
  const [recentJobs, setRecentJobs] = useState<RecentJobDataType[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setRecentJobs(JobData)
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  return (
    <div className="flex flex-col lg:flex-row !mt-7 m-auto w-full max-w-[1200px]">
      <div className="flex-[0.5]  px-2">
        <BasicCard className="h-[415px]">
          <div className="flex ">
            <p className="flex-1 font-semibold text-[18px]">
              Number of leaves remains
              <br />
              <span className="text-[#848D9A] font-normal text-[12px]">
                As of now Aug 28, 2023
              </span>
            </p>
            <HiOutlineFilter />
          </div>
          <div className="min-w-[200px] mx-auto mt-4 relative ">
          <PieChart/>
          </div>
        </BasicCard>
        <BasicCard className="h-[331px] overflow-y-auto mt-3">
          <p className="font-semibold text-[18px] mb-4">Recent Added Jobs</p>
          {!loading ? recentJobs.map((job, index) => (
            <DescriptionList key={index} jobData={job} />
          )) : <Loader/>}
          {/* <DescriptionList /> */}
        </BasicCard>
      </div>
      <div className="flex-[1] px-2">
        <BasicCard className="h-[357px]">
          <div className="flex">
            <p className="flex-1 font-bold text-[18px]">Announcement</p>
            <SelectList label="create new" options={["option1","option2"]}/>

          </div>
          <p className="mt-5 font-bold text-[14px]">
            Quaid E Azam Day & Christmas
          </p>
          <p className="mt-4 text-[#32363E]">
            Dear Team,
            <br />
            <br />
            We wanted to inform you that the office will be closed on Monday,
            December 25th, 2023, in celebration of Quaid E Azam Day &
            Christmas.Please be advised that all team members are expected to
            resume work on Tuesday, December 26th, 2023. Work from home or leave
            requests on this day will not be permitted, and absences may result
            in sandwich leave deduction as per company policy. We wish you a
            delightful holiday filled with joy and relaxation.
            <br />
            <br /> Best Regards,
          </p>
        </BasicCard>
        <BasicCard className="h-[380px] mt-[18px] overflow-y-auto">
          <div className="flex mb-8">
            <p className="flex-1 font-bold text-[18px]">
              Meeting and Interviews
            </p>
            <SelectList label="create new" options={["option1","option2"]}/>
          </div>
          {/* list */}
          <ScheduleList />
          <ScheduleList />
          <ScheduleList />
          {/* <ScheduleList /> */}
        </BasicCard>
      </div>
    </div>
  );
}
