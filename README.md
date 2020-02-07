# maze-game

# Challenges
  - How to generate a maze?
  - How to draw this things on the screen?
  - How to make some keyboard keys control on the ball?
  - How to detect when the ball touches the green square?

# Simplify the challenges
  + Need the following: 
    - Tree Data Structure.
    - Recursion.
    - Matter.js (`brm.io/matter.js`)

# To Building a Maze:
  - Create a grid of 'cell'.
  - Pick a random starting cell.
  - For that cell, build a randomly-ordered list of neighbors.
  - If a neighbor has been visited before, removed from the list.
  - For each remaining neighbor, 'move' to it and remove the wall     between those two cells.
  - Repeat for this new neighbor .