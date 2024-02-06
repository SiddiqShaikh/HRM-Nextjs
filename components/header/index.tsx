import { MdOutlineEmail } from "react-icons/md";
import CommonInput from "../input";
import { SlBell } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-16 bg-white shadow-md flex items-center px-4 absolute w-full z-[10]">
      <div className="flex-1">
        <CommonInput
          placeholder="Search"
          className="bg-[#EBEBEB] max-w-[320px] !py-2"
        />
      </div>
      <div className="flex items-center">
        <MdOutlineEmail size={25} className="cursor-pointer" />
        <SlBell size={25} className="ml-4 cursor-pointer" />
        <div className="flex items-center cursor-pointer ml-4">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
          </div>
          <IoIosArrowDown className="ml-2" />
        </div>
      </div>
    </div>
  );
}
