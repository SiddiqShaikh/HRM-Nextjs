"use client";
import AttendanceCard from "@/components/card/attendancecard";
import { use, useEffect, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";

export default function AttendanceSummary() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);
  return (
    <div className="!mt-16 pt-4 px-4 m-auto w-full max-w-[1200px]">
      <div className="flex items-center">
        <h1 className="text-lg font-bold ml-4 flex-1">
          {`My Attendance Summary `}
          <span className="font-normal">{`(January-2024)`}</span>
        </h1>
        <HiOutlineFilter />
      </div>
      <div className="flex mt-4 justify-center gap-6 flex-wrap">
        <AttendanceCard
          descText="31 days"
          count={24}
          cardTitle="Total Present"
          loading={loading}
        />
        <AttendanceCard
          className="!bg-[#FFA600]"
          descText="Casual"
          count={3}
          cardTitle="On Leaves"
          loading={loading}
        />
        <AttendanceCard
          className="!bg-[#FF5630]"
          descText="Leave Disprove"
          count={2}
          cardTitle="On Absent"
          loading={loading}
        />
        <AttendanceCard
          className="!bg-[#377DFF]"
          descText="Weeks"
          count={8}
          cardTitle="OFF Days"
          loading={loading}
        />
      </div>
    </div>
  );
}
