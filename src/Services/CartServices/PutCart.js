import Axios from "axios";
import { domainName } from '../../Domain/DomainName';

function PutCart(accessToken, cartId, formData) {
    return (
        Axios.put(`${domainName}/cart/${cartId}`, formData, {
            headers: {
                "ngrok-skip-browser-warning": "true",
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => res.data)
            .catch(error => console.log(error))
    )
}

export default PutCart;