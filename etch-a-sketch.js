let parent = document.querySelector("#etch-container");
let size = 300 / 16;

for(let i=0; i<16; i++)
{
    let gridParent = document.createElement("div");
    gridParent.setAttribute("id",`${i}`);
    for(let j=0; j<16; j++)
    {
        let a = document.createElement("div");
        a.setAttribute("style",`background-color: white; height:${size}px; width:${size}px;`);
        a.addEventListener("mouseover",() => {
            a.setAttribute("style",`background-color: rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()}); height:${size}px; width:${size}px;`);
        });
        a.classList = `${i}-${j}`;
        gridParent.appendChild(a);
    }
    parent.appendChild(gridParent);
}

let createBTN = document.querySelector("#grid-create-button");
createBTN.addEventListener("click",() =>{
let squaresNumber = Number(prompt("Enter number of squares you want per grid."));
if(squaresNumber > 100)
{
    alert("Cannot exceed 100 squares per grid. Setting squares per grid to 100.")
    squaresNumber = 100;
}
createGrid(squaresNumber);
});

function createGrid(maxSquares)
{
    parent.replaceChildren();
    let newSize = 300 / maxSquares;
    for(let i=0; i<maxSquares; i++)
{
    let gridParent = document.createElement("div");
    gridParent.setAttribute("id",`${i}`);
    for(let j=0; j<maxSquares; j++)
    {
        let a = document.createElement("div");
        a.setAttribute("style",`background-color: white; height: ${newSize}px; width: ${newSize}px`);
        a.addEventListener("mouseover",() => {
            a.setAttribute("style",`background-color: rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()}); height: ${newSize}px; width: ${newSize}px`);
        });
        a.classList = `${i}-${j}`;
        gridParent.appendChild(a);
    }
    parent.appendChild(gridParent);
}
}

function randomColorValue()
{
    return Math.floor(Math.random() * 255);
}