"use client";
import TeamLogo from "../TeamLogo/TeamLogo";
import { useRouter } from "next/navigation";

interface FixtureResultProps {
  fixture: any;
}
const FixtureResult = ({ fixture }: FixtureResultProps) => {
  const {
    fixture: { id },
    teams: { home, away },
    goals,
  } = fixture;
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/fixture/${id}`);
  };
  return (
    <div
      className="flex items-center justify-evenly p-4 cursor-pointer"
      onClick={handleNavigation}
    >
      <TeamLogo src={home.logo} teamName={home.name} />

      {typeof goals.home === "number" && typeof goals.away === "number" ? (
        <div className="bg-light-borders dark:bg-dark-borders px-4 py-1 rounded-full">
          <span className="text-lg">{`${goals.home} - ${goals.away}`}</span>
        </div>
      ) : (
        <span>-</span>
      )}

      <TeamLogo src={away.logo} teamName={away.name} />
    </div>
  );
};

export default FixtureResult;
