const container = document.querySelector('#container');
      const resetBtn = document.querySelector('#reset-btn');

      function createGrid(numSquares) {
        container.innerHTML = ''; // clear previous grid
        const squareSize = 960 / numSquares; // calculate size of each square
        for (let i = 0; i < numSquares * numSquares; i++) {
          const square = document.createElement('div');
          square.classList.add('square');
          square.style.width = `${squareSize}px`; // set size of each square
          square.style.height = `${squareSize}px`;
          square.addEventListener('mouseover', () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const color = `rgb(${red}, ${green}, ${blue})`;
            let opacity = square.dataset.opacity || 1;
            opacity -= 0.1;
            square.dataset.opacity = opacity;
            square.style.backgroundColor = color;
            square.style.opacity = opacity;
          });
          container.appendChild(square);
        }
        container.style.width = `${977}px`; // set width of container
        container.style.height = `${960}px`; // set height of container
      }

      btnNoSquares.addEventListener('click', () => {
        let gridSize = prompt("Enter a number between 1 and 100 for the new grid size:");

        // Check if the user has entered a valid grid size
        if (gridSize === null) {
          // If user clicked Cancel, do nothing and return
          return;
        } else {
          gridSize = parseInt(gridSize);
          if (gridSize <= 0 || gridSize > 100 || isNaN(gridSize)) {
            // If user entered an invalid input, show an error message and call resetGrid() again
            alert("Please enter a valid number between 1 and 100.");
            btnNoSquares.click(); // simulate click to reset the grid
            return;
          }
        }

        // Remove the existing grid
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        // Create the new grid
        createGrid(gridSize);
      });

      createGrid(16);