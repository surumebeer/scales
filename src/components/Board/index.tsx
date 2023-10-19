import { Flets } from "../Flets";
import { BoardFletsNumUl, BoardFletsNumLi } from "./styles";

const stringNum = 6;
const fletsEndNum = 27;

export const Board = () => {
  return (
    <div>
      <BoardFletsNumUl>
        {[...Array(fletsEndNum)].map((_, index) => (
          <BoardFletsNumLi>{index}</BoardFletsNumLi>
        ))}
      </BoardFletsNumUl>
      {[...Array(stringNum)].map((_, index) => (
        <Flets stringNum={index} fletsEndNum={fletsEndNum} />
      ))}
    </div>
  );
};
