//👉 Write your tests below here:
import {calculateBMI, pickBiggestBMI} from './main.js'

test("check tomBMI", function(){
    expect(calculateBMI(78, 1.80)).toBe(24)
})

test("check bettyBMI", function(){
    const bettyMass = 60;
    const bettyHeight = 1.50;
    const expected = 26;
    expect(calculateBMI(bettyMass, bettyHeight)).toBe(expected)
})

test("check bettyBMI", function(){
    const bettyMass = 60;
    const bettyHeight = 1.50;
    const expected = 26;
    expect(calculateBMI(bettyMass, bettyHeight)).toBe(expected)
})

test("pick the biggest", function(){
    const people = [
        {
            name: "Tom",
            weight: 78,
            height: 1.80
        },
        {
            name: "Betty",
            weight: 60,
            height: 1.50
        }
    ]

    expect(pickBiggestBMI(people)).toBe('Betty')
})

test("pick the first if the same BMI", function(){
    const people = [
        {
            name: "Tony",
            weight: 70,
            height: 1.78
        },
        {
            name: "Steve",
            weight: 78,
            height: 1.78
        },
        {
            name: "Eric",
            weight: 78,
            height: 1.78
        }
    ]

    expect(pickBiggestBMI(people)).toBe('Steve')
})

test("undefined if no people", function() {
    expect(pickBiggestBMI([])).toBe(undefined)
})
