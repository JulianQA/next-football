"use client";
import TeamLogo from "../TeamLogo/TeamLogo";
import { useRouter } from "next/navigation";

interface FixtureResultProps {
  fixture: any;
}
const FixtureResult = ({ fixture: response }: FixtureResultProps) => {
  const {
    fixture: { id, status },
    teams: { home, away },
    goals,
  } = response;
  const router = useRouter();

  const handleNavigation = () => {
    if (id && status.short !== "NS") {
      router.push(`/fixture/${id}`);
    }
  };
  return (
    <div
      className={`flex items-center justify-evenly p-1 sm:p-4 mb-5 ${
        status.short !== "NS" && "cursor-pointer"
      }`}
      onClick={handleNavigation}
    >
      <TeamLogo src={home.logo} teamName={home.name} />

      {typeof goals.home === "number" && typeof goals.away === "number" ? (
        <div className="bg-light-borders dark:bg-dark-borders px-2 sm:px-4 py-1 rounded-full sm:text-lg flex">
          <span>{goals.home}</span>
          <span>-</span>
          <span>{goals.away}</span>
        </div>
      ) : (
        <span>-</span>
      )}

      <TeamLogo src={away.logo} teamName={away.name} />
    </div>
  );
};

export default FixtureResult;
