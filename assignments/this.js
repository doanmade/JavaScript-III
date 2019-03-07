/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function talk(hello) {
    console.log(this);
    return hello;
}

console.log(talk("Hello World"));

// Principle 2

// code example for Implicit Binding

const SuperBat = {
    name: "SuperBat",
    weapon:"Battle Axe",
    power:"Calls Down Lighting",
    saying:"By the power of GraySkull",
    fight: function(){
        return `${this.name} raises his ${this.weapon} and yells ${this.saying} as he ${this.power} and destroys his foes`;

    },
    intro: function() {
        return `${this.name} just then you hear the thundering voice of ${this.name} saying ${this.saying} you look up as he ${this.power} and smashes his ${this.weapon} into the ground and the earth shakes!`;
    }
}
console.log(SuperBat.intro());
console.log(SuperBat.fight());

// Principle 3

// code example for New Binding

function Enemy (weapon){
    this.weapon = weapon;
    this.attack = function() {
       console.log(`Swings ${this.weapon}`);
    }
    
  }
  
  const fireGiant = new Enemy('Burning Maul');
  const stormSneak = new Enemy('Diamond Tail');
  
  fireGiant.attack();
  stormSneak.attack();
// Principle 4

// code example for Explicit Binding

// const josh = new cordiaPerson('kevin');
// const kevin = new cordiaPerson('josh');

const host = {
    name: "President Fire"
  }
  
  const heroNames = ["SuperBat ", "GreenTourch ", "IronHulk "];
    
  function battleIntro(hero) {
    return `Ladies and gents My name is ${this.name}, help me in welcoming our Heros!! we have ${hero}`;
  }
  console.log(battleIntro.call(host, heroNames));
  
  function heroIntro(hero1, hero2, hero3) {
    return `Ladies and gents My name is ${this.name}, help me in welcoming our Heros!! we have ${hero1},${hero2},${hero3}`;
  }
  console.log(heroIntro.apply(host, heroNames));
  console.log(heroIntro.call(host, ...heroNames));