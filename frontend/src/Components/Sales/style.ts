import styled from "styled-components";

export const SalesComponent = styled.section`
    padding: 40px 10px ;

    .dateInput {
        background-color: ${props => props.theme['darkGunmetal']};
        border: 1px solid ${props => props.theme['charcoal']};
        color: ${props => props.theme['gray-10']};

        border-radius: 5px;
        height: 46px;
        width: 100%;
        padding: 0 20px;
        font-size: 18px;
    }
`

export const Container = styled.div`
    max-width: 100%;
    width: 57rem;   
    margin: 0 auto;
    padding: 40px 10px;
`
export const Card = styled.div`
    border-radius: 10px;
    background: ${props => props.theme['primary']};
    padding: 30px 10px;

    h2 {
        color: ${props => props.theme['violet']};
        font-size: 24px;
        margin-bottom: 20px;
    }

    @media(min-width: 576px) {
        padding: 35px;
    }
`

export const InputContainer = styled.div`
    width: 300px;
    margin-bottom: 1rem;

    & + div {
        
    }

   
`

