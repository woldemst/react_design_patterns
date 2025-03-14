import { useState } from "react"
import styled from "styled-components"

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`;


export const UncontolledModal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
            <button onClick={() => setShouldShow(true)}>Open Modal</button>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}></button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    )
}