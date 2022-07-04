import axios from 'axios';
import { URL } from '../config';


export default function axiosApi(namePARAM, surnamePARAM, emailPARAM, passPARAM){
    axios({
        method: "post",
        url: URL.dev,
        data: {
            firstName: namePARAM,
            surname: surnamePARAM,
            email: emailPARAM,
            pass: passPARAM
        }
    })

}