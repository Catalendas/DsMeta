import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { axio } from "../../axios";
import { Sale } from "../../models/sale";
import { Table } from "../Table"
import { Card, Container, InputContainer, SalesComponent } from "./style"

interface sales {
    Sale: {
        id: number;
        sellerName: string;
        date: string;
        visited: number;
        deals: number;
        amount: number;
    }
}


export function Sales() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date()

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)

    const [sales, setSales] = useState<Sale[]>([])
    
    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10)
        const dmax = maxDate.toISOString().slice(0, 10)
        

        axio.get(`/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(Response => setSales(Response.data.content))
    }, [minDate, maxDate])


    return (
        <SalesComponent>
            <Container>
                <Card>
                    <h2>Vendas</h2>

                    <InputContainer>
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => {setMinDate(date)}}
                            className="dateInput"
                            dateFormat="dd/MM/yyyy"
                        />
                    </InputContainer>

                    <InputContainer>
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => {setMaxDate(date)}}
                            className="dateInput"
                            dateFormat="dd/MM/yyyy"
                        />
                    </InputContainer>

                    <Table Sales={sales}/>
                </Card>

                
            </Container>
        </SalesComponent>

    )
}

function setSales(content: any): any {
    throw new Error("Function not implemented.");
}
