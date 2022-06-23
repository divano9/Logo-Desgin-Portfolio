

let storage = sessionStorage.getItem("idName");


const txt = document.getElementsByClassName("txt")[0];

const logoImg = document.getElementsByClassName("l-img")[0];

const bckg = document.getElementsByClassName("s-background")[0];

const logo = document.getElementsByClassName("s-logo")[0];

const mockup1 = document.getElementById("mockup-1");

const mockup2 = document.getElementById("mockup-2");

const mockup1L = document.getElementById("mockup-1-L");

const mockup2L = document.getElementById("mockup-2-L");



txt.id = "tee"


switch (storage) {
    case "logo1":
        txt.id = "txt-1";
        logo.id= "s-logo-1";
        bckg.src="assets/bkg/single-1-m.png";
        logo.src="assets/port-logo/single-1-550.png";
        mockup1.src="assets/mockups/logo-1-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-1-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-1-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-1-mockup-2-L.jpg";
        document.getElementById("text-1").style.display="block";
        break;

    case "logo2":
            txt.setAttribute("id", "txt-2");
            logo.setAttribute("id", "s-logo-2");
            bckg.src="assets/bkg/single-2-m.png";
            logo.src="assets/port-logo/single-2-550.png";
            mockup1.src="assets/mockups/logo-2-mockup-1-S.jpg";
            mockup2.src="assets/mockups/logo-2-mockup-2-S.jpg";
            mockup1L.href="assets/mockups/logo-2-mockup-1-L.jpg";
            mockup2L.href="assets/mockups/logo-2-mockup-2-L.jpg";
            document.getElementById("text-2").style.display="block";
            break;

    case "logo3":
            txt.setAttribute("id", "txt-3");
            logo.setAttribute("id", "s-logo-3");
            bckg.src="assets/bkg/single-3-m.png";
            logo.src="assets/port-logo/single-3-550.png";
            mockup1.src="assets/mockups/logo-3-mockup-1-S.jpg";
            mockup2.src="assets/mockups/logo-3-mockup-2-S.jpg";
            mockup1L.href="assets/mockups/logo-3-mockup-1-L.jpg";
            mockup2L.href="assets/mockups/logo-3-mockup-2-L.jpg";
            document.getElementById("text-3").style.display="block";
            break;

    case "logo4":
        txt.setAttribute("id", "txt-4");
        logo.setAttribute("id", "s-logo-4");
        bckg.src="assets/bkg/single-4-m.png";
        logo.src="assets/port-logo/single-4-550.png";
        mockup1.src="assets/mockups/logo-4-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-4-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-4-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-4-mockup-2-L.jpg";
        document.getElementById("text-4").style.display="block";
        break;

    case "logo5":
        txt.setAttribute("id", "txt-5");
        logo.setAttribute("id", "s-logo-5");
        bckg.src="assets/bkg/single-5-m.png";
        logo.src="assets/port-logo/single-5-550.png";
        mockup1.src="assets/mockups/logo-5-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-5-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-5-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-5-mockup-2-L.jpg";
        document.getElementById("text-5").style.display="block";
        break;    
    
    case "logo6":
        txt.setAttribute("id", "txt-6");
        logo.setAttribute("id", "s-logo-6");
        bckg.src="assets/bkg/single-6-m.png";
        logo.src="assets/port-logo/single-6-550.png";
        mockup1.src="assets/mockups/logo-6-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-6-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-6-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-6-mockup-2-L.jpg";
        document.getElementById("text-6").style.display="block";
        break;

    case "logo7":
        txt.setAttribute("id", "txt-7");
        logo.setAttribute("id", "s-logo-7");
        bckg.src="assets/bkg/single-7-m.png";
        logo.src="assets/port-logo/single-7-550.png";
        mockup1.src="assets/mockups/logo-7-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-7-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-7-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-7-mockup-2-L.jpg";
        document.getElementById("text-7").style.display="block";
        break;

    case "logo8":
        txt.setAttribute("id", "txt-8");
        logo.setAttribute("id", "s-logo-8");
        bckg.src="assets/bkg/single-8-m.png";
        logo.src="assets/port-logo/single-8-550.png";
        mockup1.src="assets/mockups/logo-8-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-8-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-8-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-8-mockup-2-L.jpg";
        document.getElementById("text-8").style.display="block";
        break;

    case "logo9":
        txt.setAttribute("id", "txt-9");
        logo.setAttribute("id", "s-logo-9");
        bckg.src="assets/bkg/single-9-m.png";
        logo.src="assets/port-logo/single-9-550.png";
        mockup1.src="assets/mockups/logo-9-mockup-1-S.jpg";
        mockup2.src="assets/mockups/logo-9-mockup-2-S.jpg";
        mockup1L.href="assets/mockups/logo-9-mockup-1-L.jpg";
        mockup2L.href="assets/mockups/logo-9-mockup-2-L.jpg";
        document.getElementById("text-9").style.display="block";
        break;
};







