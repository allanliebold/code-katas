/* Two Fighters, One Winner. Two fighter objects take turns attacking. Each has a name, health, and damage dealt per attack. 
The declareWinner function accepts the two fighters and the firstAttacker as arguments. Return the name of the winner. 

*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health = fighter2.health -= fighter1.damage;
  }
  return winner;
}
