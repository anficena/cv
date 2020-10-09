// Item data each page
const educations = [
    {
        name: "Universitas Negeri Yogyakarta",
        majors: "Pendidikan Teknik Informatika - S1",
        period: "2015 - 2019",
        img: "/images/uny.jpg"
    },
    {
        name: "SMK Negeri 2 Wonosari",
        majors: "Multimedia",
        period: "2012 - 2015",
        img: "/images/smk2.png"
    }
];

const certification = [
    {
        name: "Belajar Fundamental Front-End Web Development",
        organization: "Dicoding Academy",
        img: "/images/dicoding.jpg",
        period: "Aug 2020 - Aug 2023",
        credential_id: "GMEPJ78QLZ3V"

    },
    {
        name: "Belajar Dasar Pemrograman Web",
        organization: "Dicoding Academy",
        img: "/images/dicoding.jpg",
        period: "Aug 2020 - Aug 2023",
        credential_id: "GMEPJ78QLZ3V"

    },
    {
        name: "Belajar Machine Learning Untuk Pemula",
        organization: "Dicoding Academy",
        img: "/images/dicoding.jpg",
        period: "Jul 2020 - Jul 2023",
        credential_id: "KERZR6Y9NXYV"

    },
    {
        name: "Memulai Pemrograman Dengan Python",
        organization: "Dicoding Academy",
        img: "/images/dicoding.jpg",
        period: "Jun 2020 - Jun 2023",
        credential_id: "W07Z6145JPQR"

    },
    {
        name: "Belajar Dasar Visualisasi Data",
        organization: "Dicoding Academy",
        img: "/images/dicoding.jpg",
        period: "Jun 2020 - Jun 2023",
        credential_id: "W07Z614LWPQR"

    },
    {
        name: "Certificate Of Competence - Graphic Design",
        organization: "Badan Nasional Sertifikasi Profesi",
        img: "/images/bnsp.jpg",
        period: "",
        credential_id: "62090 3122 3 0007544 2017"

    },
    {
        name: "Certificate Of Competence -Network Administrator Junior",
        organization: "Badan Nasional Sertifikasi Profesi",
        img: "/images/bnsp.jpg",
        period: "",
        credential_id: "62090 3122 3 0004683 2016"

    },
]

const experiences = [
    {
        company: "CV. Kinaryatama Raharja",
        img: "/images/start-up.png",
        position: "Back End And API Developer",
        type: "Contract",
        period: "Feb 2020 - May 2020",
        address: "Sleman, Yogyakarta, Indonesia"
    },
    {
        company: "PT. Amanah Media Nusantara",
        img: "/images/mandita.jpg",
        position: "Web Developer",
        type: "Freelance",
        period: "Nov 2019 - Jan 2020",
        address: "Sleman, Yogyakarta, Indonesia"
    },
    {
        company: "Universitas Negeri Yogyakarta",
        position: "Back End And API Developer",
        img: "/images/uny.jpg",
        type: "Prt-time",
        period: "Sep 2017 - sep 2019",
        address: "Sleman, Yogyakarta, Indonesia"
    },
    {
        company: "Qiscus - Multichannel Platform",
        position: "Back End And API Developer",
        img: "/images/qiscus.png",
        type: "Internship",
        period: "Jul 2016 - Sep 2016",
        address: "Sleman, Yogyakarta, Indonesia"
    }
]

const portofolio = [
    {
        title: "SICOVID",
        description: "Sistem pelacakan dan pemetaan sebaran COVID-19 di Kabupaten Wonogiri",
        img: "/images/web1.png"
    },
    {
        title: "SIPEDU ",
        description: "Sistem informasi puskesmas terpadu sebagai pusat data dinas kesehatah kabupaten dan bahan pertimbangan mengambil kebijakan berdasarkan statisik data dan report yang dihasilkan sistem.",
        img: "/images/sipedu.png"
    },
    {
        title: "GIZKIA",
        description: "Sistem pemantauan status ibu hamil dan perkembangan bayi/balita – Modul RESTFull API.",
        img: "/images/web2.png"
    },
    {
        title: "SMART SCHOOL",
        description: "Sistem pengintegrasian aktivitas manajemen pembelajaran disekolah mulai dari perencanaan sampai dengan evaluasi.",
        img: "/images/sschool.png"
    },
]
// End data

// Add item data to each page
let getEducationItem = () => {
    let educationItem = "";
    educations.forEach((item) => {
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
    certification.forEach((item) => {
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
    experiences.forEach((item) => {
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
    portofolio.forEach((item) => {
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
// End add item

// Map function to each page
const itemPage = {
    educations: getEducationItem(),
    experiences: getExperienceItem(),
    certifications: getCertificationItem(),
    portofolio: getPortofolioItem()
}



document.addEventListener("DOMContentLoaded", function () {
    // Initialization sidenav
    var elems = document.querySelector(".sidenav");
    M.Sidenav.init(elems);

    let contentBody = document.getElementById("body-content");

    // Add item nav to navbar (topnav and sidenav)
    let loadNav = async () => {
        const response = await fetch('pages/nav.html');
        const result = await response.text();

        document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
            elm.innerHTML = result
        })

        document.querySelectorAll(".topnav a, .sidenav a").forEach(function (elm) {
            elm.addEventListener("click", function (event) {
                // Tutup sidenav
                var sidenav = document.querySelector(".sidenav");
                M.Sidenav.getInstance(sidenav).close();

                // Call page based on parameter
                const page = event.target.getAttribute("href").substr(1);
                if (page == "profile") getHome()
                getPage(page);
            })
        })
    }

    let getPage = async (page) => {
        try {
            const response = await fetch(`pages/${page}.html`);
            const result = await response.text();
            contentBody.innerHTML = result

            if (page !== "home") {
                let educationList = document.getElementById(page)
                educationList.innerHTML = itemPage[page]
            }
        } catch (error) {
            console.log(error)
        }
    }

    loadNav()
    getPage('home')

})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(function () {
                console.log("Pendaftaran Serveiceworker berhasil.");
            })
            .catch(function () {
                console.log("Pendaftaran Serviceworker gagal.");
            })
    })
} else {
    console.log("Serviceworker belum didukung browser ini.")
}
