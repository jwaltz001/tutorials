const adventurer = {
  name: "Borimir",
  hitpoints: 100,
  type: "archer",
  weapon: "bow",
  attack: 10
};
const ogre1 = {
  hitpoints: 50,
  attack: 15
};
const showStatus = () => {
  alert("Battle Round: " + round + " (Ogre hitpoints: " + ogre1.hitpoints + " Adventurer hitpoints: " + adventurer.hitpoints + ")");
};
let round = 1;
const battleOgre1 = () => {
  while (adventurer.hitpoints > 0 && ogre1.hitpoints > 0) {
    let choice = prompt(showStatus() + "What would you like to do?", "attack / run away");
    if (choice == "attack") {
      ogre1.hitpoints -= adventurer.attack;
      adventurer.hitpoints -= ogre1.attack;
      round++;
    } else if (choice == "run away") {
      return alert ("Coward.");
    } else {
      alert("Give valid battle command.");
    }
    }
  if (adventurer.hitpoints > ogre1.hitpoints) {
    alert (adventurer.name + " won!");
  }else{
    alert (adventurer.name + " died.");
  }
};
battleOgre1();
//make an in battle status and make it display better
