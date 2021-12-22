/* 
👉 Write your kata here!
*/
// The equation to solve BMI is Mass / (Height * Height);
// Tom weighs 78kg and is 1.80m tall, Betty weights 60kg and is 1.50m tall.
// Please calculate and return who has the biggest BMI rounded to the nearest Interger. 

let tomMass = 78;
let tomHeight = 1.80;
let bettyMass = 60;
let bettyHeight = 1.50;

let tomBMI = Math.floor(tomMass / (tomHeight * tomHeight));
let bettyBMI = Math.floor(bettyMass / (bettyHeight * bettyHeight));

if(tomBMI > bettyBMI){
  console.log(`Tom's BMI is bigger than Betty's`);
  return `Tom's BMI ${tomBMI} is bigger than Betty's ${bettyBMI}`;
}
else {
  console.log(`Betty's BMI is bigger than Tom's`);
  return `Betty's BMI ${bettyBMI} is bigger than Tom's ${tomBMI}`;
}
//👉 Write the function your CodeWarriors will start with below here:
