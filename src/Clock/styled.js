import styled from "styled-components";

export const Paragraph = styled.p`
    text-align: end;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    color: #515151;

    @media (max-width: 767px) {
        text-align: center;
        font-size: 12px;
    }
`;