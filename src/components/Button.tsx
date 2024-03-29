import Image from "next/image";
import { FC } from "react";

type Props = {
   type: "button" | "submit";
   variant: string;
   title: string;
   icon?: string;
   full?: boolean;
};

const Button: FC<Props> = ({ type, title, icon, variant, full }): JSX.Element => {
   return (
      <button type={type} className={`${variant} ${full && "w-full"} flexCenter gap-3 rounded-full border`}>
         {icon && <Image src={icon} alt={title} width={24} height={24} />}
         <label className="bold-16 cursor-pointer whitespace-nowrap">{title}</label>
      </button>
   );
};

export default Button;
