let table = document.getElementById("table");
let color = "red";

let totalRows = 0;
let totalCols = 0;

// add rows to the grid.
function addRow(){
  let addRow = document.createElement("TR"); // creates element in first row first column
  for(let i = 0; i < totalCols; i++){
      let nextBlock = document.createElement("TD"); // creates element to fill the first row
      addRow.appendChild(nextBlock);
      nextBlock.classList.add("noColor");
  }
  table.appendChild(addRow); // add row into table
  totalRows++; //increate total row by 1
}


//add columns to the grid
function addCol(){
  let rowsArr = Array.from(table.children);
  rowsArr.forEach((row) => {
      let y = document.createElement("TD");
      row.appendChild(y);
      y.classList.add("noColor");
  })
  totalCols++;
}

//remove rows from the grid
 function removeRow(){
  table.removeChild(table.lastChild);
  totalRows--;
 }

 //remove columns from the grid
function removeCol(){
  row = table.rows;
    for(let i = 0; i < totalCols; i++){
        row[i].deleteCell(table.lastChild);
    }
  totalCols--;
  
}
//select a color from a dropdown menu of colors
function selectColor(){
  color = document.getElementById("selectColor").value;
}

// click on a single cell, changing its color to the currently selected color
table.addEventListener('click', (event) => { 

      let row = document.getElementsByClassName('row');
      let rlen = row.length;
      for(let i = 0; i < rlen; i++){
          let cells = row[i].children;
          for(let j = 0; j < cells.length; j++){
              cells[j].addEventListener('mouseover', (event) =>{
                  cells[j].style.backgroundColor = colors.value;
              });
          }
      }
  });

// fill all uncolored cells with the currently selected color
function fillAllUncolorCells(){
  let uncolored = document.querySelectorAll("TD.noColor");
  uncolored.forEach((cell) => {
    cell.style.backgroundColor = color;
    cell.classList.toggle("noColor");
  })
}

//fill all cells with the currently selected color
function fillAllCells(){
  let allCells = document.querySelectorAll("TD");
  allCells.forEach((cell) => {
    cell.style.backgroundColor = color;
    if(cell.classList.contains("noColor")) {
      cell.classList.toggle("noColor");
    }
  })
}

// clear all cells/restore all cells to their original/initial color
function restoreAllCells(){
  let allCells = document.querySelectorAll("TD");
  allCells.forEach((cell) =>{
    cell.style.backgroundColor = "rgb(153, 160, 63)";
    if(!cell.classList.contains("noColor"))
      cell.classList.add("noColor");
  })
}


// click and hold (mouseover) from a single cell (start) to a different cell (end) 
table.addEventListener('mouseover', function(event) {
  let cell = event.target;
  cell.style.backgroundColor = color;
  if(cell.classList.contains("noColor")) {
      cell.classList.toggle("noColor");
  }
})