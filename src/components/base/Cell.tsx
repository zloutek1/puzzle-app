import styled from "styled-components";

type StyledProps = {

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
`;

export const Cell = ({ x, y }: Props) => {
  return (
    <StyledCell>
      {1}
    </StyledCell>
  );
};
