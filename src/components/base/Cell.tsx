import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { highlight, reset, resetAndHighlight, selectHighlights } from "../../features/highlights/highlightSlice";
import { selectValue } from "../../features/values/valueSlice";

type StyledProps = {
  highlighted: boolean
}

type Props = {
  x: number;
  y: number;
};

const StyledCell = styled.div<StyledProps>`
  border: 1px solid #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  cursor: pointer;

  ${({highlighted}) => highlighted ? 'background-color: rgba(225, 215, 0, 0.5)' : ''}
`;

export const Cell = ({ x, y }: Props) => {
  const values = useAppSelector(selectValue);
  const highlights = useAppSelector(selectHighlights);
  const dispatch = useAppDispatch();

  return (
    <StyledCell highlighted={highlights[y][x]} onClick={() => {dispatch(resetAndHighlight({x, y}))}}>
      {values[y][x]}
    </StyledCell>
  );
};
