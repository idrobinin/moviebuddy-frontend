export interface IBanner {
  year: string;
  duration: string;
  id: string;
  plot: string;
  title: string;
  genre: string;
  poster: string;
}

export interface ITab {
  title: string;
  emoji: string;
  id: string;
}

export interface IFlashNews {
  id: number;
  rotate: number;
  image: string;
  text: string;
  date: string;
}
