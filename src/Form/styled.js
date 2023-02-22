import styled, { css } from "styled-components";

export const StyledForm = styled.form`
     margin-top: 50px;
`;

export const Legend = styled.legend`
    background-color: hsl(120, 100%, 26%);
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-size: 17px;
    font-weight: 700;
`;

export const Fieldset = styled.fieldset`
    border-color: hsl(0, 0%, 30%);
    border-radius: 10px;
    border-width: 3px;
    border-style: solid;
    background-color: white;
`;

export const List = styled.ul`
    list-style: none;
    font-weight: 700;
    padding: 0;
`;

export const ListItem = styled.li`
    padding: 10px;
    ${({ result }) => result && css`
        @media (max-width: 767px) {
        display: grid;
        }
    `}
`;

export const LabelText = styled.span`
    width: 170px;
    display: inline-block;
`;

export const ResultText = styled.span`
width: 170px;
display: inline-block;
`;

export const Select = styled.select`
    padding: 3px;
    border-width: 2px;
    border-radius: 5px;
    width: 250px;
`;

export const Input = styled.input`
    padding: 3px;
    border-width: 2px;
    border-radius: 5px;
    width: 250px;
`;

export const Container = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    width: 40%;
    padding: 7px;
    background-color: hsl(120, 100%, 26%);
    color: white;
    border: none;
    font-size: 17px;
    font-weight: 700;
    border-radius: 10px;
    text-align: center;

    &:hover{
        background-color: hsl(120, 100%, 30%);
    }

    &:active{
        background-color: hsl(120, 100%, 35%);
    }
`;

export const Loading = styled.p`
    height: 211px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    @media (max-width: 767px) {
        height: 267px;
        }
`;

export const Failure = styled.p`
    height: 211px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: red;
    @media (max-width: 767px) {
        height: 267px;
        }
`;