import styled from 'styled-components'

export const HeaderComponent = styled.header`
    height: 220px;
    width: 100%;

    background: linear-gradient(180deg, #102347 0%, #181818 100%);
    color: ${props => props.theme['white']};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h1 {
        margin-top: 1rem;
    }

    span {
        font-weight: 300;
    }
`