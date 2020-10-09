import { data } from './data.js';
// let  = data;

let getEducationItem = () => {
    let educationItem = "";
    data.educations.forEach((item) => {
        educationItem += `
            <li class="collection-item avatar">
                <img src="${item.img}" alt="" class="circle">
                <span class="title">${item.name}</span>
                <p> ${item.majors} <br>
                    ${item.period}
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        `;
    })
    return educationItem
}

let getCertificationItem = () => {
    let certificationItem = "";
    data.certification.forEach((item) => {
        certificationItem += `
            <li class="collection-item avatar">
                <img src="${item.img}" alt="" class="circle">
                <span class="title">${item.name}</span>
                <p> ${item.organization} <br>
                    ${item.period} <br>
                    Credential ID: ${item.credential_id} <br>
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        `;
    })
    return certificationItem
}

let getExperienceItem = () => {
    let experienceItem = "";
    data.experiences.forEach((item) => {
        experienceItem += `
            <li class="collection-item avatar">
                <img src="${item.img}" alt="" class="circle">
                <span class="title">${item.position} - ${item.type}</span>
                <p> ${item.company} <br>
                    ${item.period} <br>
                    Address: ${item.address} <br>
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        `;
    })
    return experienceItem
}

let getPortofolioItem = () => {
    let portofolioItem = "";
    data.portofolio.forEach((item) => {
        portofolioItem += `
        <div class="col m6" id="portofolio">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${item.img}">
                        </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${item.title}<i
                            class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}<i
                            class="material-icons right">close</i></span>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    return portofolioItem
}


export const itemPage = {
    educations: getEducationItem(),
    experiences: getExperienceItem(),
    certifications: getCertificationItem(),
    portofolio: getPortofolioItem()
}

