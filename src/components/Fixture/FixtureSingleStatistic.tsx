interface FixtureSingleStatisticProps {
  statistic: SingleStatistic;
  team: Team;
}
const FixtureSingleStatistic = ({
  statistic,
  team,
}: FixtureSingleStatisticProps) => {
  return (
    <div className="text-center">
      {statistic.value ? <span>{statistic.value}</span> : <span>-</span>}
    </div>
  );
};

export default FixtureSingleStatistic;
