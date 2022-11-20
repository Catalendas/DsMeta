
import { Button } from "../ButtonPerson";
import { TableComponent } from "./style";

type Sale = {
   Sales: {
        id: number;
        sellerName: string;
        date: string;
        visited: number;
        deals: number;
        amount: number;   
   }[]
}

export function Table(sales: Sale) {


    return (
        <TableComponent>
            <thead>
                <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                </tr>
            </thead>

            <tbody>
                {sales.Sales.map(sale => {
                    return (
                        <tr key={sale.id}>
                            <th className="show992">{sale.id}</th>
                            <th className="show576">{sale.date}</th>
                            <th>{sale.sellerName}</th>
                            <th className="show992">{sale.visited}</th>
                            <th className="show992">{sale.deals}</th>
                            <th>R$ {sale.amount.toFixed(2)}</th>
                            <th><Button saleId={sale.id}/></th>
                        </tr>
                    )
                })}
            </tbody>
        </TableComponent>
    )
}