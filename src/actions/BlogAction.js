import axios from "axios";
import { baseUrl } from "../configurations/Local/LocalValue";



export const LoadBlogId = async (id,name,description,coverPicture,content, datesave) => {

    
    await axios.get(`${baseUrl.urlapi}/api/v1/blog/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }})
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            name(response.data.data.name);
            description(response.data.data.description);
            coverPicture(response.data.data.coverPicture);
            content(response.data.data.content);
            datesave(response.data.data.datesave);
        })
        .catch(function (error) {
            console.log(error);
        });
}




// Charger
export const LoadAllBlog = async (SetState) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/blog/get/all`, {
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
