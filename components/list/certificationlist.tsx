import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function CertificationList() {
  return (
    <div className="flex items-center my-4 ">
      <div className="rounded-md shadow-lg w-[60px] h-[60px] p-2">
        <Image
        src={"/images/pdflogo.png"}
        alt="profile"
        height={50}
        width={50}
        className="w-full h-full"
        />
      </div>
      <div className="flex-1 ml-4">
        <p className="text-[14px] font-semibold">Leaves and Holiday Policy</p>
        <p className="text-[12px]  text-[#8F8F8F]">01-jan-2024</p>
      </div>
      <BsThreeDotsVertical />
    </div>
  );
}
