import CommonButton from "@/components/button";
import Image from "next/image";
import { IoCube } from "react-icons/io5";

export default function ProfileSection(){
    return(
        <div className="relative mx-4">
        <Image
          src={`/images/homebg.png`}
          height={100}
          width={900}
          alt="Dashboard Image"
          className="w-full bg-cover bg-center !min-h-[300px]"
        />
        <div className="absolute w-full bottom-[-50px]">
          <div className="rounded-2xl shadow-md max-w-[1049px] h-[130px] mx-auto flex items-center bg-white bg-opacity-80  px-4">
            <div className="flex-1 flex items-center">
              <Image
                src={`/images/profile.png`}
                alt="MegaHCM"
                height={100}
                width={100}
                className="rounded-lg"
              />
              <p className="ml-4">
                <span className="text-xl font-semibold">M. Rameez</span>
                <br />
                <span className="text-sm">Senior</span>
              </p>
            </div>
            <div className="max-w-[150px] w-full">
              <CommonButton className=" !py-[6px] bg-white  inline-flex justify-center items-center rounded-xl shadow-md">
                <IoCube className="mr-2" size={20} />
                Edit
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
    )
}