import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {

    const [left, right] = children;

    return (
        <Container>
            <Pane weight={leftWeight} >
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
};