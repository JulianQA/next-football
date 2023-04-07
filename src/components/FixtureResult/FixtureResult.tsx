"use client";
import TeamLogo from "../TeamLogo/TeamLogo";
import { useRouter } from "next/navigation";

interface FixtureResultProps {
  id: string;
}
const FixtureResult = ({ id }: FixtureResultProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/fixture/${id}`);
  };
  // *Recibir el src y el nombre del equipo
  return (
    <div
      className="flex items-center justify-evenly p-4 cursor-pointer"
      onClick={handleNavigation}
    >
      <TeamLogo
        src="https://assets.laliga.com/assets/2019/06/07/small/barcelona.png"
        teamName="Barcelona"
      />

      <div className="bg-light-borders dark:bg-dark-borders px-4 py-1 rounded-full">
        <span className="text-lg">1 : 2</span>
      </div>
      <TeamLogo
        src="https://assets.laliga.com/assets/2019/06/07/small/real-madrid.png"
        teamName="Real Madrid"
      />
    </div>
  );
};

export default FixtureResult;
