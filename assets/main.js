// MAIN

const typewrite = document.getElementById("typewrite")
const text = ["Frontend Web Developer" + "<br>" + "Find out more ..."]
const arrowDown = document.getElementById("arrow")
let i = 0
let j = 0
let currentText = []

function loop() {
    typewrite.innerHTML = currentText.join("")
    if (i < text.length) {

        if (j <= text[i].length) {
            currentText.push(text[i][j])
            j++
        }
    }
    setTimeout(loop, 100)

}

loop()

// TOTOP Button

let toTop = document.getElementById("totop")

toTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

// ABOUT ME


const aboutMeTitle = document.getElementById("aboutmetitle")
const textAbout = ["About me:"]

let o = 0
let u = 0
let currentAboutText = []

function loop2() {
    aboutMeTitle.innerHTML = currentAboutText.join("")
    if (o < textAbout.length) {

        if (u <= textAbout[o].length) {
            currentAboutText.push(textAbout[o][u])
            u++
        }
    }
    setTimeout(loop2, 100)
}


// WHAT I KNOW


const knowTitle = document.getElementById("whatiknowtitle")
const textKnow = ["My Skills:"]

let k = 0
let l = 0
let currentKnow = []

function loop4() {
    knowTitle.innerHTML = currentKnow.join("")
    if (k < textProjects.length) {

        if (l <= textKnow[k].length) {
            currentKnow.push(textKnow[k][l])
            l++
        }
    }
    setTimeout(loop4, 100)
}




// MY PROJECTS

const projectsTitle = document.getElementById("protitle")
const textProjects = ["My Projects:"]

let m = 0
let n = 0
let currentProjects = []

function loop3() {
    projectsTitle.innerHTML = currentProjects.join("")
    if (m < textProjects.length) {

        if (n <= textProjects[m].length) {
            currentProjects.push(textProjects[m][n])
            n++
        }
    }
    setTimeout(loop3, 100)
}


const proPics = document.getElementById("propics")

let projects = [
    {
        img: "assets/img/alivio.jpg",
        name: "ALIVIO",
        url: "https://fathomless-dawn-97207.herokuapp.com/"
    },
    {
        img: "assets/img/california.jpg",
        name: "CALIFORNIA CALLING",
        url: "https://severinstephan.github.io/California-Calling/"
    },
    {
        img: "assets/img/coffeeshop.jpg",
        name: "COFFEE & CO",
        url: "https://severinstephan.github.io/Alivio/"
    },
    {
        img: "assets/img/critique.jpg",
        name: "DESIGN CRITIQUE",
        url: "https://severinstephan.github.io/Design-Critique/"
    },
    {
        img: "assets/img/designproject.jpg",
        name: "DESIGN PROJECT",
        url: "https://severinstephan.github.io/Design-Project/"
    },
    {
        img: "assets/img/digital.jpg",
        name: "DIGITAL DESIGNER",
        url: "https://severinstephan.github.io/Digital-Designer/"
    },
    {
        img: "assets/img/game.jpg",
        name: "FREE2GAME",
        url: "https://stupefied-jackson-9f68e1.netlify.app/"
    },
    {
        img: "assets/img/headphone.jpg",
        name: "HEADPHONE",
        url: "https://severinstephan.github.io/Headphone/"
    },

    {
        img: "assets/img/takeaction.jpg",
        name: "TAKE ACTION",
        url: "https://severinstephan.github.io/Roma/"
    },
    {
        img: "assets/img/temporary.jpg",
        name: "TEMPORARY FOLIO",
        url: "https://severinstephan.github.io/Temporary-Folio/"
    },
    {
        img: "assets/img/work.jpg",
        name: "WORK RESPONSIBLY",
        url: "https://severinstephan.github.io/Work-Responsibly/"
    }
];

projects.forEach(ele => {
    // proPics.innerHTML += `<img src=${ele.img} />`
    proPics.innerHTML += `<a href=${ele.url} target="_blank"> <img src=${ele.img} /> <a/>`
})


// CONTACT

const contactResult = document.getElementById("contacttext")
const textContact = ["Send me over a message and let´s push your idea to the next level!"]

let x = 0
let y = 0
let currentContact = []

function loop5() {
    contactResult.innerHTML = currentContact.join("")
    if (x < textContact.length) {

        if (y <= textContact[x].length) {
            currentContact.push(textContact[x][y])
            y++
        }
    }
    setTimeout(loop5, 100)
}

let flyButton = document.getElementById("send")
let plane = document.getElementById("plane")

function flyAway() {
    setTimeout(() => {
        plane.classList.add("go")
        flyButton.style.background = "#348082"
        flyButton.value = "Done"
    }, 500)
}

// CAT

const eye1 = document.querySelector('.irisone');
const eye2 = document.querySelector('.iristwo')
window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 160;
    const y = -(window.innerHeight / 2 - evt.pageY) / 650;
    eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});

let body = document.getElementById("darkmode")
let hero = document.querySelector("section")
let meCircle = document.getElementById("mecircle")
let whatIknow = document.getElementById("whatiknow")
let linkedIn = document.querySelector(".linkedin")
let gitHub = document.querySelector(".github")
let contact = document.getElementById("contact")
let sendButton = document.getElementById("send")
let aboutMe = document.getElementById("aboutmesection")
let myPro = document.getElementById("mypro")
let myButton1 = document.querySelector(".button1")
let hey = document.getElementById("hey")
let clickcat = document.getElementById("clickcat")
let sun = document.getElementById("sun")
let moon = document.getElementById("moon")
let arrow = document.getElementById("arrow")
let isOn = true

function darkMode() {

    isOn = isOn ? false : true;
    if (isOn === false) {
        body.classList.add("darkmode")
        sun.style.opacity = "0"
        moon.style.opacity = "1"
        moon.style.bottom = "69%"
        sun.style.bottom = "-45%"


    } else {
        body.classList.remove("darkmode")
        body.style.transition = "all 1s"
        sun.style.bottom = "40%"
        moon.style.bottom = "-5%"
        sun.style.opacity = "1"
        moon.style.opacity = "0"
    }

}


