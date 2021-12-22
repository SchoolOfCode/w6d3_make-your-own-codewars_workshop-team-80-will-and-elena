//👉 Write your tests below here:
import calculateBMI from './main.js'

test("check tomBMI", function(){
    expect(calculateBMI(78, 1.80)).toBe(24)
})

test("check bettyBMI", function(){
    const bettyMass = 60;
    const bettyHeight = 1.50;
    const expected = 26;
    expect(calculateBMI(bettyMass, bettyHeight)).toBe(expected)
})






// if(tomBMI > bettyBMI){
//   console.log(`Tom's BMI is bigger than Betty's`);
//   return `Tom's BMI ${tomBMI} is bigger than Betty's ${bettyBMI}`;
// }
// else {
//   console.log(`Betty's BMI is bigger than Tom's`);
//   return `Betty's BMI ${bettyBMI} is bigger than Tom's ${tomBMI}`;
// }