import Axios from "axios";
import { domainName } from '../../Domain/DomainName';

function PostReview(accessToken, formData) {
    return (
        Axios.post(`${domainName}/review`, formData, {
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

export default PostReview;