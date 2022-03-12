const nav = document.querySelector(".nav-ksa")

window.onscroll = function () {
  if (document.documentElement.scrollTop >= "1") {
    document.querySelector(".nav-ksa").style.backgroundColor = "rgb(234, 232, 227)"

    document.querySelector("#nav-link1").style.display = "inline"
  } else {
    document.querySelector(".nav-ksa").style.backgroundColor = "rgba(234, 232, 227, 0.5)"
    document.querySelector("#nav-link1").style.display = "none"
  }
}

