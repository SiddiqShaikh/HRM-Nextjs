
interface AttendanceCardProps {
    className?:string;
    cardTitle?:string;
    count?:number;
    descText?:string;
    loading?:boolean;

}

export default function AttendanceCard({className,cardTitle,count,descText,loading}:AttendanceCardProps){
  if(loading){
    return(
      <div className="skeleton h-[119px] w-[262px]"></div>
    )
  }
    return(
        <div className={`h-[119px] w-[262px] bg-[#29AB91] rounded-xl flex ${className} text-white flex-shrink` }>
            <div className="flex-1 flex flex-col justify-center  pl-4">
              <p className="text-[14px]">{cardTitle}</p>
              <p className="text-[24px] font-bold mt-1">{count ?? "-"}</p>
              <p className="text-[12px] mt-1">{descText}</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
            <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
            </div>
          </div>
    )
}