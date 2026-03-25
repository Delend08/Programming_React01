let number = 0;

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

const changeNumber = (n) => {
    number += n;
    resultH1.innerHTML = number;
}

const reset = () => {
    resultH1.innerHTML = 0;
}
