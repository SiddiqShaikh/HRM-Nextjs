'use client'
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { SlBell } from "react-icons/sl";
import CommonInput from "../input";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()
  const Logout =()=>{
router.push('/signin');
  }
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
        
       <details className="dropdown bg-none relative">
  <summary className="ml-3 btn border-none bg-none rounded-full">
    <div className="avatar">
      <Image
        src="/images/profile.png"
        alt="profile"
        width={24}
        height={24}
        className="w-full h-full bg-cover rounded-full"
      />
    </div>
  </summary>
  <ul className="p-2 shadow menu dropdown-content bg-opacity-90 bg-base-100 rounded-box w-32 absolute top-14 right-0 ">
   
    <li>
      <a>Profile</a>
    </li>
    <li onClick={()=>Logout()}>
      <p>Logout</p>
    </li>
  </ul>
</details>
      </div>
    </div>
  );
}
