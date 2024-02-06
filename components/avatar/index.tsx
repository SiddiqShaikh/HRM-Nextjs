import Image from "next/image";


interface TextAvatarProp{
    className?:string;
    position?:string;
    name?:string;
}
export default function TextAvatar({className,name,position}:TextAvatarProp){
    return(
        <div className={`w-[159px] text-center ${className}`}>
                <Image
                  src="/images/profile.png"
                  width={159}
                  height={159}
                  alt="profile"
                  className="w-full rounded-md mb-5"
                />
                <p className="font-bold text-[14px]">{position}</p>
                <p className="text-[#26327A] text-[16px]">{name}</p>
              </div>
    )
}