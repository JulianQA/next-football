interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

interface Leagues {
  id: number;
  name: string;
  endpoint: string;
  src: StaticImageData;
}

//Fixtures
interface RootObject {
  errors: any[];
  get: string;
  paging: Paging;
  parameters: Parameters;
  response: Response[];
  results: number;
}

interface Paging {
  current: number;
  total: number;
}

interface Parameters {
  live: string;
}

interface Response {
  events: Event[];
  fixture: Fixture;
  goals: GoalByTeam;
  league: League;
  score: Score;
  teams: Goals;
}

interface Event {
  assist: Assist;
  comments: null;
  detail: string;
  player: Assist;
  team: Team;
  time: Time;
  type: Type;
}

interface Assist {
  id: number | null;
  name: null | string;
}

interface Team {
  id: number;
  logo: string;
  name: string;
  winner?: boolean | null;
}

interface Time {
  elapsed: number;
  extra: number | null;
}

enum Type {
  Card = "Card",
  Goal = "Goal",
  Subst = "subst",
  Var = "Var",
}

interface Fixture {
  date: Date;
  id: number;
  periods: Periods;
  referee: null | string;
  status: Status;
  timestamp: number;
  timezone: Timezone;
  venue: Venue;
}

interface Periods {
  first: number;
  second: number | null;
}

interface Status {
  elapsed: number;
  long: Long;
  short: Short;
}

enum Long {
  FirstHalf = "First Half",
  SecondHalf = "Second Half",
}

enum Short {
  The1H = "1H",
  The2H = "2H",
}

enum Timezone {
  UTC = "UTC",
}

interface Venue {
  city: string;
  id: number;
  name: string;
}

interface Goals {
  away: Team;
  home: Team;
}

interface League {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  round: string;
  season: number;
}

interface GoalByTeam {
  home: number | null;
  away: number | null;
}
interface Score {
  extratime: GoalByTeam;
  fulltime: GoalByTeam;
  halftime: GoalByTeam;
  penalty: GoalByTeam;
}
