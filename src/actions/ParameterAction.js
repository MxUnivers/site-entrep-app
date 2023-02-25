import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../configurations/Local/LocalValue";









export const LoadAllParameterAccueil = async (
    id,
    videoIntro, coverPicture1, description1, title1,
    // Activité 2
    coverPicture2, description2, smalltitle2, title2,
) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/parameter/get/all`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.data[0]));

            // ***************************************************     Accueil
            // activité Accueil 1
            videoIntro(response.data.data[0].accueil.activite1.video);
            coverPicture1(response.data.data[0].accueil.activite1.coverPicture);
            title1(response.data.data[0].accueil.activite1.title);
            description1(response.data.data[0].accueil.activite1.description);

            // activité Accueil 2
            smalltitle2(response.data.data[0].accueil.activite2.smalltitle);
            coverPicture2(response.data.data[0].accueil.activite2.coverPicture);
            title2(response.data.data[0].accueil.activite2.title);
            description2(response.data.data[0].accueil.activite2.description);
            id(response.data.data[0]._id);

            // *****************************************************   About
        })
        .catch(function (error) {
            console.log(error);
        });
}






export const LoadAllParameterAbout = async (
    videoAbout, coverPictureAbout, desciptionAbout, titleAbout, strategyAbout, contentAbout,
    coverPictureAbout2, descriptionAbout2, titleAbout2,
) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/parameter/get/all`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.data[0]));

            // *****************************************************   About
            videoAbout(response.data.data[0].about.activite1.video);
            titleAbout(response.data.data[0].about.activite1.title);
            desciptionAbout(response.data.data[0].about.activite1.description);
            coverPictureAbout(response.data.data[0].about.activite1.coverPicture);
            strategyAbout(response.data.data[0].about.activite1.strategy);
            contentAbout(response.data.data[0].about.activite1.content);
            // Activité 2
            titleAbout2(response.data.data[0].about.activite2.title);
            descriptionAbout2(response.data.data[0].about.activite2.description);
            coverPictureAbout2(response.data.data[0].about.activite2.coverPicture);
        })
        .catch(function (error) {
            console.log(error);
        });
}



// Footer page 
export const LoadAllParameterFooter = async (
    logo, telephone1, telephone2, email, facebook, youtube, instagram
) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/parameter/get/all`, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (response) {
            console.log(JSON.stringify(response.data.data[0]));
            logo(response.data.data[0].contact.activite1.coverPicture);
            telephone1(response.data.data[0].contact.activite2.telephone1);
            telephone2(response.data.data[0].contact.activite2.telephone2);
            email(response.data.data[0].contact.activite2.email);
            facebook(response.data.data[0].contact.activite3.facebook);
            youtube(response.data.data[0].contact.activite3.youtube);
            instagram(response.data.data[0].contact.activite3.instagram);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Information sur les adress email
export const LoadAllParameterAddress = async (telephone1, telephone2, email,localisation,urllocal) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/parameter/get/all`, {
        headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
        console.log(JSON.stringify(response.data.data[0]));
        telephone1(response.data.data[0].contact.activite2.telephone1);
        telephone2(response.data.data[0].contact.activite2.telephone2);
        email(response.data.data[0].contact.activite2.email);
        localisation(response.data.data[0].contact.activite2.localisation);
        urllocal(response.data.data[0].contact.activite2.urllocal);
    }).catch(function (error) {
        console.log(error);
    });
}






// nom de l'entreprise
export const LoadAllParameterNameEntreprise = async (name) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/parameter/get/all`, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
        console.log(JSON.stringify(response.data.data[0]));
        name(response.data.data[0].contact.activite1.name);
    }).catch(function (error) { console.log(error); });
}


// nom de l'entreprise
export const LoadAllParameterImageEntreprise = async (coverPicture) => {
    await axios.get(`${baseUrl.urlapi}/api/v1/parameter/get/all`, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
        console.log(JSON.stringify(response.data.data[0]));
        coverPicture(response.data.data[0].contact.activite1.coverPicture);
    }).catch(function (error) { console.log(error); });
}
