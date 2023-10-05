const canvasEl = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const HexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function colorChange() {
    let colorCode = "#";
    for (i=0; i<6; i++) {
        colorCode += HexNums[Math.floor(Math.random()*16)];
    }
    canvasEl.style.backgroundColor = colorCode;
    colorEl.textContent = colorCode;
    console.log(colorCode);
}