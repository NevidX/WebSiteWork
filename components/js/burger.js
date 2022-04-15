
const burgerTrigger = document.querySelectorAll(".burger__trigger");
const burgerBody = document.querySelectorAll(".burger__body");
const style = "active";
const contentWidth = "100vh";


burgerTrigger.forEach((item, i) => {
    burgerBody[i].style.height = "0";
    item.addEventListener("click", () => {
        if (!(style === "none")) {
            item.classList.toggle(style);
        }
        if ((item.classList.contains("active"))) {
            document.getElementById("body").style.overflow = "hidden"
        } else {
            document.getElementById("body").style.overflowY = "scroll"
        }
        if (burgerBody[i].style.height === "0px") {
            burgerBody[i].style.height = contentWidth;
        } else {
            burgerBody[i].style.height = "0";
        }
    });
    window.addEventListener("resize", () => {
        let pageWidth = document.documentElement.scrollWidth;
        if (pageWidth >= 1000) {
            burgerBody[i].style.height = "0";
            item.classList.remove("active")
        }
        if (!(item.classList.contains("active"))) {
            document.getElementByTagName("body").style.overflowY = "scroll" // Don't forget add ID to <body id="body"></body>
        }
    })
});


