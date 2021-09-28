function randomClr() {
  bdy = document.querySelector("body")

  let r = Math.round(Math.random(255) * 255);
  let g = Math.round(Math.random(255) * 255);
  let b = Math.round(Math.random(255) * 255);
  console.log(r)

  let ranCol = `rgb(${r},${g},${b})`;

  bdy.style.backgroundColor = ranCol;

  let text = document.querySelector("h1")

  text.innerHTML = ranCol;
}