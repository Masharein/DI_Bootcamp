// object literal
// attributes
// methods

const characterFirst = {
  username: 'Hermione Granger',
  house: 'Gryfindor',
  age: 20,
  play : function () {
    console.log(this);
    console.log(`${this.username} plays football`);
  }
};

characterFirst.play();

console.log(this); // global scope it means the window
// this in an object means this particular object

class Character {
    constructor (name,age,house="Gryfindor") {
        this.username = name;
        this.userage = age;
        this.userhouse = house;
    }

    play() {
        console.log(`${this.username} plays football`);
    }

    setHouse (newhouse) {
        this.userhouse = newhouse
    }
};

//creating am object from the Character class
const firstUser = new Character("Harry", 23, "Gryfindor");
console.log(firstUser);
firstUser.play();
firstUser.setHouse('ABC')
console.log(firstUser.userhouse);


//inheritance
class Wizard extends Character{
    constructor (wizardName, wizardAge, wizardHouse, wizardPowers) {
        super(wizardName, wizardAge, wizardHouse); //call the constructor function of the parent class (the Character clasd)
        this.allPowers = wizardPowers || [];
    }

    addPowers (newPower) {
        this.allPowers.push(newPower);
    }

    getPowers () {
        for(let power of this.allPowers) {
            console.log(`${this.username} power is ${power}`);
        }
    }

    //method that has exactly the same name the parent class, it overrides it
    play () {
        console.log(`${this.username} doesn't play with the other characters`);
    }
}

const wizardOne = new Wizard("Jaffar", 200, "Aladin", ["disappear", "run fast"]);
console.log(wizardOne);
wizardOne.addPowers("fly");
wizardOne.getPowers();
wizardOne.play()

const wizardTwo= new Wizard("John", 200, "Mermaid");
wizardTwo.addPowers("fly");
wizardTwo.getPowers()


// Exercise 1
// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed
// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default
// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
    constructor (brand, channel = 1, volume = 50) {
    this.brandTV = brand;
    this.channelTV = channel;
    this.volumeTV = volume;
  
    this.increaseVolume = function() {
      this.volumeTV++;
    };
  
    this.decreaseVolume = function() {
      this.volumeTV--;
    };
  }
}
  
  const lgTV = new TV('LG');
  lgTV.increaseVolume();
  console.log(lgTV.volumeTV); // 51
  
  // Part II
  
  
  class SmartTV extends TV {
    constructor(brand, channel, volume, netflix = true) {
    super(brand, channel, volume);
    }
     increaseVolume = () {
     this.volumeTV += 10;
    };
  }
  
  
  
  // Part III
  
  function TV(brand, channel = 1, volume = 50) {
    this.brandTV = brand;
    this.channelTV = channel;
    this.volumeTV = volume;
  
    this.increaseVolume = function() {
      this.volumeTV++;
      if (this.volumeTV > 100) this.volumeTV = 100;
    };
  
    this.decreaseVolume = function() {
      this.volumeTV--;
      if (this.volumeTV < 0) this.volumeTV = 0;
    };
  
    this.setChannel = function(channel) {
      if (channel <= 50) this.channelTV = channel;
    };
  
    this.resetTV = function() {
      this.channelTV = 1;
      this.volumeTV = 50;
    };
  
    this.status = function() {
      return `${this.brandTV} at channel ${this.channelTV}, volume ${this.volumeTV}`;
    };
  }
  
  const panasonicTV = new TV('Panasonic');
  panasonicTV.increaseVolume();
  panasonicTV.increaseVolume();
  panasonicTV.increaseVolume();
  console.log(panasonicTV.status()); // "Panasonic at channel 1, volume 53"
  panasonicTV.setChannel(60);
  console.log(panasonicTV.status()); // "Panasonic at channel 1, volume 53"
  panasonicTV.setChannel(45);
  console.log(panasonicTV.status()); // "Panasonic at channel 45, volume 53"
  panasonicTV.resetTV();
  console.log(panasonicTV.status());