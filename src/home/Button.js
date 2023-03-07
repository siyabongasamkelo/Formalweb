import styled from 'styled-components';

export const Button = styled.button`
    height: 40px;
    width: 120px;
    border-radius: 30px;
    background-color: #007fff;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
        border: none;
        box-shadow: 0 0 20px #ff7582;
    }
`;