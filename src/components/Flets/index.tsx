import { Flet } from "../Flet";
import { FletsUl } from "./styles";

type Props = {
  stringNum: number;
  fletsEndNum: number;
};

export const Flets = ({ stringNum, fletsEndNum }: Props) => {
  return (
    <FletsUl>
      <li>{stringNum}</li>
      {[...Array(fletsEndNum)].map((_, index) => (
        <Flet fletsNum={index} />
      ))}
    </FletsUl>
  );
};
