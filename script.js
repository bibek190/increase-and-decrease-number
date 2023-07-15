const num = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const changeNum = e.currentTarget.classList;
    if (changeNum.contains("decrease")) {
      count--;
    } else if (changeNum.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      num.style.color = "green";
    }
    if (count < 0) {
      num.style.color = "red";
    }
    if (count === 0) {
      num.style.color = "white";
    }
    num.innerText = count;
  });
});
