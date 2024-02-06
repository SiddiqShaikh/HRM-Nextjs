import Image from "next/image";
import LoginCard from "./login";

export default function SignIn() {
  return (
    <div className="h-[100vh] w-full bg-login-bg bg-cover bg-no-repeat flex items-center md:items-start">
      <div className="flex-1 hidden md:flex h-[100vh] justify-center items-center flex-col w-full">
        <Image
          src={"/images/loginsection.png"}
          alt="Login Image"
          width={321}
          height={321}
          className="mb-10"
        />
        <div className="w-full max-w-[500px] text-center">
          <h1 className="font-[600] text-2xl">
            The Ultimate{" "}
            <span className="text-[#29A095]">HR Management Solution</span>
          </h1>
          <p className="text-[#7E8299] text-sm leading-8">
            At SourceCode, we have a reliable, secure and adaptable HR
            management built from the ground up.We are determined to help our
            employees to give their best efforts every day to achieve the goals
            of their job.
          </p>
        </div>
      </div>
      <div className="flex-1 flex h-[100vh] justify-center items-center">
        <LoginCard/>
      </div>
    </div>
  );
}
