/* Super Street Fighter 2 Character Selection - Same as before but now with the updated character roster. 

fighters = [
	[       "",    "Ryu",  "E.Honda",  "Blanka",   "Guile", ""       ],
	[ "Balrog",    "Ken",  "Chun Li", "Zangief", "Dhalsim", "Sagat"  ],
	[   "Vega", "T.Hawk", "Fei Long",  "Deejay",   "Cammy", "M.Bison"]
];

Moving up from Balrog or Sagat should behave the same way as moving up from any of the characters on the top row.
*/

function superStreetFighterSelection(fighters, position, moves){
  return [];
}

function streetFighterSelection(fighters, position, moves){
  return moves.map(move => {
    switch(move) {
      case 'up':
        position[0] = 0;
        break;
      case 'down':
        position[0] = 1;
        break;
      case 'left':
        position[1] === 0 ? position[1] = 5 : position[1]--;
        break;
      case 'right':
        position[1] === 5 ? position[1] = 0 : position[1]++;
        break;
    }  
    return fighters[position[0]][position[1]];
  });
}
