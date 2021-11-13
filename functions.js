var colors = [
  "rgba(113, 161, 212, 1)",
  "rgba(225, 142, 150, 1)",
  "rgba(255, 235, 205, 1)",
];
var colorIndex = 0;
function changeColor() {
  var col = document.getElementById("body");
  var colList1 = document.getElementById("nav-li1");
  var colList2 = document.getElementById("nav-li2");
  var colSocial1 = document.getElementById("social1");
  var colSocial2 = document.getElementById("social2");
  var myVideos = document.getElementById("my-videos");
  var colFooter = document.getElementById("footer");
  var colFooterA = document.getElementById("footer-a");
  var colFooterATop = document.getElementById("footer-a-toTop");

  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
  col.style.backgroundColor = colors[colorIndex];
  colList1.style.color = colors[colorIndex];
  colList2.style.color = colors[colorIndex];
  colSocial1.style.backgroundColor = colors[colorIndex];
  colSocial2.style.backgroundColor = colors[colorIndex];
  myVideos.style.color = colors[colorIndex];
  colFooter.style.color = colors[colorIndex];
  colFooterA.style.color = colors[colorIndex];
  colFooterATop.style.backgroundColor = colors[colorIndex];

  colorIndex++;
}



// <!-- var colors = [
//   "rgba(74, 179, 228, 0.5)",
//   "rgba(113, 161, 212, 1)",
//   "rgba(247,116,166, 0.55)",
//   "rgba(252, 195, 191, 1)",
//   "rgba(235, 163, 177, 1)"
//   "rgba(225, 142, 150, 1)",
//   "rgb(255, 248, 243, 1)",
//   "rgba(250, 246, 211, 0.7)",
// ];  potential colors-->
