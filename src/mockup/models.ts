export interface ICell {
  color: string;
  x: number;
  y: number;
  title?: string;
  question?: IQuestion;
  isStart?: boolean;
  isEnd?: boolean;
  image?: string;
}

export interface IQuestion {
  content: string;
  answer?: string[];
}
