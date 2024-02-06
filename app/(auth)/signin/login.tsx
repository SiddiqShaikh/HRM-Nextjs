"use client";
import CommonButton from "@/components/button";
import CommonInput from "@/components/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultValues = {
  employeeCode: "",
  password: "",
};
export default function LoginCard() {
  const [loginData, setLoginData] = useState(defaultValues);
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
   
  
  const handleLogin = () => {
    setLoading(true);
    console.log(loginData, "<== login data");
    if (loginData.employeeCode === "" || loginData.password === "") {
     
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }
    alert("Login Success");
    router.push("/dashboard");
    setLoading(false);
    
  };

  return (
    <>

    <div className="w-[513px] h-[646px] rounded-md flex flex-col  items-center shadow-lg">
      <Image
        src={"/images/sourcecodelogo.png"}
        alt="company logo"
        height={98}
        width={258}
        className="mt-11"
      />
      <p className="mt-11 font-[500]">Log in to start your session</p>

      <CommonInput
        placeholder="Employee Code"
        name="employeeCode"
        className="max-w-[398px]  border-[1px] border-[#E4E6EF] mt-9"
        onChange={onChange}
      />
      <CommonInput
        placeholder="Password"
        name="password"
        type="password"
        className="max-w-[398px]  border-[1px] border-[#E4E6EF] mt-9"
        onChange={onChange}
      />
      <CommonButton
        className="max-w-[400px] bg-[#29A095] text-white mt-10"
        loading={loading}
        onClick={() => handleLogin()}
      >
        LOG IN
      </CommonButton>
      <Image
        src={"/images/megahcm.png"}
        alt="company logo"
        height={98}
        width={258}
        className="mt-11"
      />
      <p className="mt-10 text-[13px]">© 2024 MegaHCM. All Rights Reserved</p>
    </div>
    </>
  );
}
