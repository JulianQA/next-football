import Image from "next/image";

interface TeamLogoProps {
  src: string;
  teamName: string;
}
const TeamLogo = ({ src, teamName }: TeamLogoProps) => {
  return (
    <div className="flex flex-col items-center w-32">
      <figure className="flex items-center bg-light-borders dark:bg-dark-borders rounded-full p-2">
        <Image
          src={src}
          alt={teamName}
          className="w-10 h-10 object-contain"
          width={20}
          height={20}
          title={teamName}
        />
      </figure>
      <span className="line-clamp-1">{teamName}</span>
    </div>
  );
};

export default TeamLogo;
