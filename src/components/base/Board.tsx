import styled from "styled-components";
import { Cell } from "./Cell";

type StyledProps = {
  width: number;
  height: number;
}

type Props = {
  width: number;
  height: number;
};

const StyledBoard = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(${({ width }) => width}, 50px);
  grid-template-rows: repeat(${({ height }) => height}, 50px);
`;

export const Board = ({ width, height }: Props) => {
  const cells = [];
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      cells.push(<Cell key={`cell-${x}-${y}`} x={x} y={y} />);
    }
  }

  return (
    <StyledBoard width={width} height={height}>
      {cells}
    </StyledBoard>
  );
};
