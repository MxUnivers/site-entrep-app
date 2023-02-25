import axios from "axios";
import { baseUrl } from "../configurations/Local/LocalValue";



export const CreateNewMessage = async (name, email, subject ,content) => {
    var data = JSON.stringify({
        "name": name,
        "email": email,
        "subject": subject, 
        "content":content
    });
    var config = {
        method: 'post',
        url: `${baseUrl.urlapi}/api/v1/message/`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };
    await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert("Message envoyé ")
        })
        .catch(function (error) {
            console.log(error);
        });
}

