import Axios from "axios";
import { domainName } from "../../Domain/DomainName";
function GetImageCategory(categoryImage) {
    return (
        Axios.get(`${domainName}/images/categories/${categoryImage}`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": 'multipart/form-data'
            },
            responseType: 'blob'
        })
            .then(res => URL.createObjectURL(res.data))
            .catch(error => console.log(error))
    )
}

export default GetImageCategory;