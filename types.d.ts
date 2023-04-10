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

interface RootObject {
  errors: any[];
  get: string;
  paging: Paging;
  parameters: Parameters;
  response: any[];
  results: number;
}

interface Coach {
  id: number;
  name: string;
  photo: string;
}
interface Player {
  id: number;
  name: string;
  number: number;
  pos: string;
}
