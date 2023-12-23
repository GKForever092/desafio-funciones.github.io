const ele = document.getElementById("ele1")

ele.addEventListener("click", function (event) {

    event.target.style.backgroundColor = 'yellow'


})

document.getElementById("ele1").style.backgroundColor = 'green'