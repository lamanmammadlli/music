var limitedh1 = document.querySelector(".bodyunlimited h1 ")
var limitedsag = document.querySelector(".bodyunlimited .divsag")


console.log(window.scrollY);

window.addEventListener("scroll", function () {
    console.log(window.scrollY)
    if (window.scrollY > 100  &&  window.scrollY < 1300  ) {
        limitedh1.classList.add("anima")
        limitedsag.classList.add("anima")
    } else {
        limitedh1.classList.remove("anima")
        limitedsag.classList.remove("anima")
    }
})
