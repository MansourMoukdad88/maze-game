const { Engine, Render, Runner, World, Bodies} = Matter;

const engine = Engine.create();
const {world} = engine;

const cells = 3;
const width = 600;
const height = 600;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes:true,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, {isStatic: true}),
  Bodies.rectangle(width / 2, height, width, 40, {isStatic: true}),
  Bodies.rectangle(0, height / 2, 40, height, {isStatic: true}),
  Bodies.rectangle(width, height / 2, 40, height, {isStatic: true})
];
World.add(world, walls);

// Maze Generation

const grid = Array(cells).fill(null).map(()=> Array(cells).fill(false));
const verticals = Array(cells).fill(null) .map(()=> Array(cells - 1).fill(false));
const horizontals = Array(cells - 1).fill(null).map(()=> Array(cells).fill(false));
// console.log(grid);

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  // If i visited the cell at [row, column], then return
  if(grid[row][column]) {
    return;
  }
  // Mark this cell as being visited
  grid[row][column] = true;
  // Assemble randomly-ordered list of neighbors
  const neighbor = [
    [row - 1, column],  // Above
    [row, column + 1],  // Right
    [row + 1, column],  // Bottom
    [row, column - 1]   // Left
  ]
  console.log(neighbor);

  // For each neighbor....

  // See if that neighbor is out of bounds

  // If we have visited that neighbor, continue to next neighbor 

  // Remove a wall from either verticals or horizontals 

  // Visit that next cell 
}

stepThroughCell(startRow, startColumn);
console.log(grid);
