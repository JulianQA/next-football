import premierLogo from "../../assets/img/premier.png";
import laLigaLogo from "../../assets/img/laliga.png";
import bundesligaLogo from "../../assets/img/bundesliga.png";
import serieALogo from "../../assets/img/seriea.png";
import ligueOneLogo from "../../assets/img/ligue-1.png";

export const leagues: Leagues[] = [
  {
    id: 140,
    name: "La Liga",
    endpoint: "/laliga",
    src: laLigaLogo,
  },
  {
    id: 39,
    name: "Premier League",
    endpoint: "/premier",
    src: premierLogo,
  },
  {
    id: 61,
    name: "Ligue 1",
    endpoint: "/ligue1",
    src: ligueOneLogo,
  },
  {
    id: 78,
    name: "Bundesliga",
    endpoint: "/bundesliga",
    src: bundesligaLogo,
  },
  {
    id: 135,
    name: "Serie A",
    endpoint: "/seriea",
    src: serieALogo,
  },
];
