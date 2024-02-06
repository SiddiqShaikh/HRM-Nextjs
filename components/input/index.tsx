interface InputProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
}

export default function CommonInput({ placeholder, className,onChange,name,type }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={`outline-none w-full rounded-md px-[13px] py-[12px] ${className}`}
      onChange={onChange}
      name={name}
      type={type || "text"}
      
    ></input>
  );
}
