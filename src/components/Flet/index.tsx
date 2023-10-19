import { FletsLi } from "./styles";
import { convertNumIntoKey } from "../../common/convertNumIntoKey";

type Props = {
  fletsNum: number;
};

export const Flet = ({ fletsNum }: Props) => {
  const key = convertNumIntoKey(fletsNum);
  return <FletsLi>{key.name}</FletsLi>;
};
