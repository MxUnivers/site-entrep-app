import axios from "axios";
import { baseUrl } from "../configurations/Local/LocalValue";



export const LoadSolutionId = async (id, name, description, coverPicture, visible) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/solution/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function (response) {
        console.log(JSON.stringify(response.data));
        name(response.data.data.name);
        description(response.data.data.description);
        coverPicture(response.data.data.coverPicture);
        visible(response.data.data.visible);
    })
        .catch(function (error) {
            console.log(error);
        });
}




// Charger
export const LoadAllSolution = async (SetState) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/solution/get/all`, {
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
