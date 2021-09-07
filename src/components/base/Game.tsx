import styled from "styled-components";
import { Board } from "./Board";

type StyledProps = {};

type Props = {
  width: number;
  height: number;
};

const StyledGame = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Game = ({ width, height }: Props) => {
  return (
    <StyledGame>
      <Board width={width} height={height} />
    </StyledGame>
  );
};
