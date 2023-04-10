import { leagues } from "@/utils/mock/leagues";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AsideBarContentProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const AsideBarContent = ({ toggle }: AsideBarContentProps) => {
  return (
    <div
      className={`ml-4 border-l border-light-borders dark:border-dark-borders pl-4`}
    >
      {leagues.map((item) => (
        <div className="flex items-center mt-3 gap-3" key={item.id}>
          <Image
            src={item.src}
            alt={item.name}
            className="w-5 h-5 object-contain"
          />
          <Link href={`league/${item.id}`} onClick={() => toggle(false)}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AsideBarContent;
