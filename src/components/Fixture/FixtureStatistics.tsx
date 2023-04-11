import Image from "next/image";
import FixtureSingleStatistic from "./FixtureSingleStatistic";

interface FixtureStatisticsProps {
  statistics: Statistics[];
}
const FixtureStatistics = ({ statistics }: FixtureStatisticsProps) => {
  return (
    <section className="mt-10">
      <h3 className="text-center text-2xl mb-10">Statistics</h3>
      <div className="flex justify-between md:justify-center md:gap-8">
        <div className="flex flex-col border-r pr-2 border-r-light-borders dark:border-r-dark-borders">
          {statistics[0].statistics.map((stat, index) => (
            <span key={index}>{stat.type}</span>
          ))}
        </div>
        <div className="flex gap-2 mx-auto md:m-0">
          {statistics.map((team) => (
            <div key={team.team.id}>
              {team.statistics.map((stat) => (
                <FixtureSingleStatistic
                  statistic={stat}
                  team={team.team}
                  key={team.team.id}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixtureStatistics;
