import { leagues } from "@/utils/mock/leagues";

interface LeaguePageProps {
  params: {
    id: string;
  };
}
const LeaguePage = ({ params: { id } }: LeaguePageProps) => {
  const leagueInfo = leagues.find((item) => item.id.toString() == id);
  // TODO LeaguePage
  return <main className="text-white">{leagueInfo?.name}</main>;
};

export default LeaguePage;
