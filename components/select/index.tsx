
interface SelectListProps {
    options?:string[];
    label?:string;

}
export default function SelectList({options,label}:SelectListProps) {
  return (
    <select className="select select-bordered w-full max-w-[150px]">
      <option disabled selected>
        {label}
      </option>
      {options?.map((option, index) => (
         <option key={index}>
         {option}
       </option>
      ))}
    </select>
  )
}
