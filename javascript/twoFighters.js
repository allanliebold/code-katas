/* Two Fighters, One Winner. Two fighter objects take turns attacking. Each has a name, health, and damage dealt per attack. 
The declareWinner function accepts the two fighters and the firstAttacker as arguments. Return the name of the winner. 

*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fighting = true; 
  while (fighting) {
    fighter2.health -= fighter1.damage;
    if fighter2.health <= 0 {
      fighting = false;  
      return fighter1.name
    }
    
    fighter1.health -= fighter2.damage;
  }
    if fighter1.health <= 0 {
      fighting = false;
      return fighter2.name;
    }
  return;
}
