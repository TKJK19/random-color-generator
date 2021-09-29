function randomClr() {
  bdy = document.querySelector("body")

  let r = Math.round(Math.random(255) * 255);
  let g = Math.round(Math.random(255) * 255);
  let b = Math.round(Math.random(255) * 255);
  console.log(r, g, b);

  let ranCol = `rgb(${r},${g},${b})`;

  bdy.style.backgroundColor = ranCol;

  let text = document.querySelector("h1")

  text.innerHTML = ranCol;
}

// copy to clipboard

colorId = document.getElementById("colorId");
colorIdText = colorId.value;

colorId.addEventListener("click", function(e) {
  colorId.select();
  colorId.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(colorId.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
})

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}