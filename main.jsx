// bai 1
let total = 0;
let num = 1;
let count = 0;

while (total <= 10000) {
  total += num;
  num++;
  count++;
}
console.log(`count: ${count}`);

const result = document.querySelector(".result");

document.addEventListener("DOMContentLoaded", () => {
  result.classList.add("alert", "alert-success");
  result.innerHTML = `<p>Số nguyên dương nhỏ nhất: ${count} </p>`;
});

// bai 2

const btn2 = document.querySelector("#btn2");
const result2 = document.querySelector(".bai-2 .result");
const numX = document.querySelector("#numX");
const numN = document.querySelector("#numN");

btn2.addEventListener("click", () => {
  let total = 0;

  let x = numX.value * 1;
  let n = numN.value * 1;

  for (let i = 0; i < n; i++) {
    total += Math.pow(x, i);
  }

  console.log(total);
  result2.classList.add("alert", "alert-success");
  result2.innerHTML = `<p>Tổng: ${total}</p>`;
});

// bai 3

const btn3 = document.querySelector("#btn3");
const result3 = document.querySelector(".bai-3 .result");
const number = document.querySelector("#num");

btn3.addEventListener("click", () => {
  let valueNum = number.value * 1;
  let total = 1;

  for (let i = 2; i <= valueNum; i++) {
    total = total * i;
  }

  result3.classList.add("alert", "alert-success");
  result3.innerHTML = `<p>Tổng: ${total}</p>`;
});

// Bai 4

const btn4 = document.querySelector("#btn4");
const result4 = document.querySelector(".bai-4 .result");

btn4.addEventListener("click", () => {
  let limit = 10;
  let str = "";
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0) {
      str += `<p style="background: red;color: white">Div Chẵn ${i}</p>`;
    } else {
      str += `<p style="background: blue;color: white">Div Lẻ ${i}</p>`;
    }
  }

  result4.innerHTML = str;
});
