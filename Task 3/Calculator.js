

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");
let light = document.querySelector(".btn-light");

buttons.forEach(bt => {
    bt.addEventListener("click", () => {
        let value = bt.value;
        screen.value += value;
    })
})
clear.addEventListener("click", () => {
    screen.value = "";
})
equal.addEventListener("click", () => {
    try {
        screen.value = eval(screen.value);
    }
    catch {
        screen.value = "NAN";
    }
})
let indicator = 1;
light.addEventListener("click", () => {
    if (indicator == 1) {
        light.innerHTML = "Light OFF"
        screen.style.background = "linear-gradient(to top,rgba(51, 51, 51, 0.603),orange)";
        indicator = 0;
    }
    else {
        light.innerHTML = "Light ON"
        screen.style.background = "linear-gradient(to top,rgb(122, 121, 121),rgb(228, 250, 213))";
        indicator = 1;
    }
})