const baseNumber = 100;
let number = baseNumber;

// h1에 있는 숫자 요소
// const resultH1= document.getElementsByTagName("h1")[0];
const resultH1 = document.getElementById("result");
// button에 있는 + 요소
// const plusButton = document.getElementsByTagName("button")[0];
// const plusButton = document.getElementsByClassName("plus")[0];

// plusButton.addEventListener("click", () => {
//     number++;
//     resultH1.innerHTML = number;
// });

// plusButton.onclick = () => {
//     number++;
//     resultH1.innerHTML = number;
// }

const render = () => {
    resultH1.innerHTML = number;
}

const changeNumber = (n = 1) => {
    number += n;
    render();
}

const reset = () => {
    number = baseNumber;
    render();
}

render();
