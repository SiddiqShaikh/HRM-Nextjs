import { BsThreeDotsVertical } from "react-icons/bs";

export default function ScheduleList() {
    return (
        <div className="flex items-center my-4 ">
            <div className="rounded-md shadow-lg flex flex-col justify-center items-center p-2">
              <p className="text-[#FFA600] font-bold text-[12px]">Mon</p>
              <p>10</p>
            </div>
            <div className="flex-1 ml-4">
              <p className="text-[14px] font-semibold">Meeting with HR</p>
              <p className="text-[12px]  text-[#8F8F8F]">9:00 am - 11:30 am</p>
            </div>
            <BsThreeDotsVertical />
          </div>
    )
}