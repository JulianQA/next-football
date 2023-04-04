interface TeamLogoProps {
  src: string;
  teamName: string;
}
const TeamLogo = ({ src, teamName }: TeamLogoProps) => {
  return (
    <div className="flex flex-col items-center">
      <figure className="bg-light-borders dark:bg-dark-borders rounded-full">
        <img src={src} alt={teamName} className="w-20" />
      </figure>
      <span>{teamName}</span>
    </div>
  );
};

export default TeamLogo;
