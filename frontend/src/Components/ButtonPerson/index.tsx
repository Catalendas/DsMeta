import { ButtonPerson} from "./style"
import LogoPerson from "../../assets/person.svg"
import {toast} from 'react-toastify'
import { axio } from "../../axios"

interface DateNotification {
    saleId: number
}

export function Button({saleId}: DateNotification) {

    function handleNotification(id: number) {
        axio.get(`/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS enviado com sucesso")
        })
    }

    return (
        <ButtonPerson onClick={() => handleNotification(saleId)}>
            <img src={LogoPerson}/>
        </ButtonPerson>
    )
}