let containers = document.getElemementsByClassName("grid-item");

console.log(containers);

containers[0].addEventListener("mouseenter", () => containers[0].style.color = "black");