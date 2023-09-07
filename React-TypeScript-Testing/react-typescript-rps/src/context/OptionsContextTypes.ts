export enum HandOption {
  rock = "rock",
  paper = "paper",
  scissors = "scissors"
}

export interface IOptions {
  name: HandOption
  icon: JSX.Element
}

export interface IOptionsContext {
  options: IOptions[];
}

export interface Props {
  children: React.ReactNode;
}