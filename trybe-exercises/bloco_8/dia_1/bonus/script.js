const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (dragon) => Math.round(Math.random() * (dragon.strength - 15) + 15);

const warriorDmg = (warrior) => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

const mageDmg = (mage) => {
  if (mage.mana > 15) {
    return {
      dmg: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
      manaSpent: 15
    }
  }
  return {
    dmg: 'Not enough mana...',
    manaSpent: 0
  }
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDmg) => {
    warrior.damage = warriorDmg(warrior);
    dragon.healthPoints -= warrior.damage;
  },

  mageTurn: (mageDmg) => {
    mage.damage = mageDmg(mage).dmg;
    mage.mana -= mageDmg(mage).manaSpent;
    dragon.healthPoints -= mage.damage;
  },

  dragonTurn: (dragonDmg) => {
    dragon.damage = dragonDmg(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },

  turnResults: () => console.log(battleMembers),

};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageDmg);
gameActions.dragonTurn(dragonDmg);

gameActions.turnResults();