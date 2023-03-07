import styled from 'styled-components';

export const Homefirst = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 481px) and (max-width: 768px) {
        height: 150vh;
    }

    @media (max-width: 480px) {
        height: 150vh;
    }
`;