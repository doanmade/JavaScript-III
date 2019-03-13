
//GameObject
function GameObject(gameAtt){
  this.createdAt = gameAtt.createdAt;
  this.name = gameAtt.name;
  this.dimensions = gameAtt.dimensions;
}
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`
}
//CharacterStats
function CharacterStats(characterAtt){
  GameObject.call(this, characterAtt);
  this.healthPoints = characterAtt.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} got an ouchy and took damage.`
};

//Humanoid
 function Humanoid(humanoidAtt){
  CharacterStats.call(this, humanoidAtt);
  this.team = humanoidAtt.team;
  this.weapons = humanoidAtt.weapons;
  this.language = humanoidAtt.language;
  
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language} - wassssss-uuuppp!!!!!`
}
//GoodvsEvil
function GoodvsEvil(vsAtt){
  Humanoid.call(this, vsAtt);
  this.superPower = vsAtt.superPower;
  this.defendpt = vsAtt.defendpt;
  this.attackpt = vsAtt.attackpt;
  this.healpt = vsAtt.healpt;
  this.showoff = vsAtt.showoff;
  
}

GoodvsEvil.prototype = Object.create(Humanoid.prototype);
GoodvsEvil.prototype.Enter = function () {
  return `${this.name} walks into the arena and ${this.showoff} - wassssss-uuuppp!!!!!`
}

HeroCharacter.prototype.attack = function () {
  return `${this.name} take his ${this.weapons} and swings it at ${Villain1.name} - wassssss-uuuppp!!!!!`
}
HeroCharacter.prototype.defend = function () {
  return `${this.name} tries to block the attack and takes  ${this.defendpt}`
}
HeroCharacter.prototype.heal = function () {
  return `${this.name} use heal and gains back ${this.healpt}`
}

//Hero - Character
function HeroCharacter(heroAtt){
  GoodvsEvil.call(this, heroAtt);
}

HeroCharacter.prototype = Object.create(GoodvsEvil.prototype);
HeroCharacter.prototype.attack = function () {
  return `${this.name} offers a greeting in ${this.skills} - wassssss-uuuppp!!!!!`
}
//Villain - Character
function VillainCharacter(villainAtt){
  GoodvsEvil.call(this, villainAtt);
}

VillainCharacter.prototype = Object.create(GoodvsEvil.prototype);
VillainCharacter.prototype.villainEnter = function () {
  return `${this.name} offers a greeting in ${this.skills} - wassssss-uuuppp!!!!!`
}

const hero1 = new HeroCharacter({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Hero',
  team: 'The Good Guys',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const Villain1 = new VillainCharacter({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Villain',
  team: 'The Bad Guys',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});