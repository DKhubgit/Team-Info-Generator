const Manager = require('../lib/manager');

describe('Manager Class', () => {
    test("Create class and checks property values", () => {
        const test = new Manager("Angie", 2, 'gmail', "12");

        expect(test).toEqual({name: "Angie", id: 2, email: 'gmail', officeNumber: "12"})
    })

    test("Check if the methods return the correct values", () => {
        const test = new Manager("Angie", 2, 'gmail', "12");

        expect(test.getName()).toEqual("Angie");
        expect(test.getId()).toEqual(2);
        expect(test.getEmail()).toEqual("gmail");
        expect(test.getRole()).toEqual("Manager");
        expect(test.officeNumber).toBe("12");
        expect(test.officeNumber).toEqual("12");
    })
})