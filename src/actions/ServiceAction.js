import axios from "axios";
import { baseUrl } from "../configurations/Local/LocalValue";









// Charger
export const LoadAllService = async (SetState) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/service/get/all`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            SetState(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
