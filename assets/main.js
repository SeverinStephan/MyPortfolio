
// TOTOP Button

//let toTop = document.getElementById("totop")

//toTop.addEventListener("click", function () {

// window.scrollTo({
//      top: 0,
//      left: 0,
//       behavior: "smooth"
//  })

//})

// ABOUTME

let textContent = document.getElementById("abouttext")
const radioButton = document.getElementById("kurz")

function kurz() {
    textContent.innerHTML = "<p> Ich mache super tolle Webseiten!</p>"
}

function mittel() {
    textContent.innerHTML = "<p> Ich habe eine Weiterbildung zur Web Entwicklerin gemacht und arbeite jetzt selbständig. Ich bin eine waschechte Berlinerin, lebe in Prenzlauer Berg, liebe das Reisen und die Natur. </p>"
}

function langeVersion() {
    textContent.innerHTML = "<p> Diese Magie die passiert wenn man all diese Zeichen und Nummer eingibt. Es sieht aus wie ein Chaos aber am Ende kommt eine wunderschöne Webseite dabei raus. 2018 bin ich zum ersten Mal in die Welt von HTML und CSS eingetaucht und habe stundenlang im Schlafanzug mit Tee und Cracker vor dem Laptop gesessen. Da wusste ich, das ist etwas womit ich meien Lebensunterhalt verdienen will. Ein Job der Spass macht. Toll! Also habe ich mitten im Lockdown eine Weiterbildung zur Web Entwicklerin gemacht und bin nun fertig. ich freue mich anderen zu helfen ihre Ideen in das World Wide Web zu laden! </p>"
}

// GALLERY

const mainPic = document.getElementById("mainpic")


function wald() {
    mainPic.innerHTML = "<img src=assets/img/Portrait4NEU.png style= width:60%;display:block;margin:auto;margin-top:15%>"
}

function bus() {
    mainPic.innerHTML = "<img src=assets/img/ichBus.png style= width:60%;display:block;margin:auto;margin-top:15%>"
}

function hund() {
    mainPic.innerHTML = "<img src=assets/img/IchPalmen.png style= width:60%;display:block;margin:auto;margin-top:15%>"
}

function klein() {
    mainPic.innerHTML = "<img src=assets/img/Portrait12NEU.png style= width:60%;display:block;margin:auto;margin-top:15%>"
}

// PROJECTS

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
        url: "https://severinstephan.github.io/Coffe-Co./"
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

// CONTACT SEND

let flyButton = document.getElementById("send")
let plane = document.getElementById("plane")

function flyAway() {
    setTimeout(() => {
        plane.classList.add("go")
        flyButton.style.background = "#7ED957"
        flyButton.value = "Done"
    }, 500)
}

// DARKMODE

let body = document.getElementById("darkmode")
let hero = document.querySelector("section")
let nav = document.querySelector("a")
let contact = document.getElementById("contact")
let sendButton = document.getElementById("send")
let myPro = document.getElementById("mypro")
let myButton1 = document.querySelector(".button1")
let hey = document.getElementById("hey")
let sun = document.getElementById("sun")
let moon = document.getElementById("moon")
let creating = document.querySelector(".creating")
let styling = document.querySelector(".styling")
let cms = document.querySelector(".cms")
let whatElse = document.querySelector(".whatelse")
let short = document.getElementById("short")
let middle = document.getElementById("middle")
let long = document.getElementById("long")
let projekteText = document.getElementById("projektetext")
let bubble = document.querySelector(".bubble")
let triangle = document.querySelector(".triangle")
let skills = document.getElementById("whatiknowtitle")
let projektTitle = document.getElementById("protitle")
let contactTitle = document.getElementById("titlecontact")
let isOn = true

function darkMode() {

    isOn = isOn ? false : true;
    if (isOn === false) {
        body.classList.add("darkmode")
        sun.style.opacity = "0"
        moon.style.opacity = "1"
        moon.style.bottom = "69%"
        sun.style.bottom = "-45%"
        creating.style.background = "none"
        styling.style.background = "none"
        cms.style.background = "none"
        whatElse.style.background = "none"
        hero.style.backgroundColor = "#232420"
        nav.style.color = "white"
        short.style.color = "white"
        middle.style.color = "white"
        long.style.color = "white"
        myPro.style.backgroundColor = "#232420"
        projekteText.style.color = "white"
        bubble.style.color = "white"
        bubble.style.border = "2px solid white"
        triangle.style.borderTop = "20px solid white"
        triangle.style.borderLeft = "20px solid transparent"
        triangle.style.borderRight = "20px solid transparent"
        skills.style.color = "#ffe742"
        projektTitle.style.color = "#ffe742"
        contact.style.backgroundColor = "#232420"
        contactTitle.style.color = "#ffe742"
        sendButton.style.backgroundColor = "#ffe742"


    } else {
        body.classList.remove("darkmode")
        body.style.transition = "all 1s"
        sun.style.bottom = "40%"
        moon.style.bottom = "-5%"
        sun.style.opacity = "1"
        moon.style.opacity = "0"
        creating.style.background = ""
        styling.style.background = ""
        cms.style.background = ""
        whatElse.style.background = ""
        hero.style.backgroundColor = ""
        nav.style.color = ""
        short.style.color = ""
        middle.style.color = ""
        long.style.color = ""
        myPro.style.backgroundColor = ""
        projekteText.style.color = ""
        bubble.style.color = ""
        bubble.style.border = ""
        triangle.style.borderTop = ""
        triangle.style.borderLeft = ""
        triangle.style.borderRight = ""
        skills.style.color = ""
        projektTitle.style.color = ""
        contact.style.backgroundColor = ""
        contactTitle.style.color = ""
        sendButton.style.backgroundColor = ""
    }

}


