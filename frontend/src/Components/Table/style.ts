import styled from "styled-components";

export const TableComponent = styled.table`

    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

    thead {
        height: 55px;
        font-size: 1rem;
        color: ${props => props.theme['gary-250']};
        font-weight: bold;
    }

    tbody {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme['gary-250']};
        text-align: center;
    }

    tbody tr {
        height: 74px;
        border-top: 1px solid #5F6E82;

        &:nth-child(odd) {
            background-color: #242C3B;
        }

        &:hover > td {
            background-color: #384459;
        }

    }
       

        .show576 {
            display: none;
        }

        .show992 {
            display: none;
        } 

        @media(min-width: 576px) {
            .show576 {
                display: table-cell;
            }  
            
            tbody tr {
                height: 62px;
            }

            tbody {
                font-size: 18px;
            }
        }

        @media(min-width: 992px) {
            .show992 {
                display: table-cell;
            }    
        }


`