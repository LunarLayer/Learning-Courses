import { createContext } from "react";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from 'react-icons/fa';
import { HandOption, IOptions, IOptionsContext, Props } from './OptionsContextTypes';

const options: IOptions[] = [
  { name: HandOption.rock, icon: <FaRegHandRock size={60} />},
  { name: HandOption.paper, icon: <FaRegHandPaper size={60} />},
  { name: HandOption.scissors, icon: <FaRegHandScissors size={60} />},
]

const OptionsContext = createContext<IOptionsContext>({
  options: []
});

export function OptionsProvider(props: Props) {
  const contextValue = {
    options: options,
  }

  return (
    <OptionsContext.Provider value={contextValue}>
      {props.children}
    </OptionsContext.Provider>
  )
}
