/* 
👉 Write your kata here!
*/
// The equation to solve BMI is Mass / (Height * Height);
// Tom weighs 78kg and is 1.80m tall, Betty weights 60kg and is 1.50m tall.
// Please calculate and return who has the biggest BMI rounded down to the nearest Integer. 

//👉 Write the function your CodeWarriors will start with below here:
function calculateBMI(mass, height) {
  return Math.floor(mass / (height * height));
}

export default calculateBMI
