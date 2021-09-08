import styled from "styled-components"
import { DecorationType } from "../types/decorations"
import Decoration from "./decorations/Decoration"

type StyledProps = {

}

type Props = {
    decorations: DecorationType[]
}

const StyledDecorations = styled.div<StyledProps>`
    * {
        pointer-events: none;
    }
`

const Decorations = ({ decorations }: Props) => {
    return (
        <StyledDecorations className="Decorations">
            {decorations.map((decoration, i) => <Decoration key={`decoration-${i}`} decoration={decoration} />)}
        </StyledDecorations>
    )
}

export default Decorations
