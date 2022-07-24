const Intern = require('../lib/intern');

describe('Intern Class', () => {
    test("Create class and checks property values", () => {
        const test = new Intern("Angie", 2, 'gmail', "UCR");

        expect(test).toEqual({name: "Angie", id: 2, email: 'gmail', school: "UCR"})
    })

    test("Check if the methods return the correct values", () => {
        const test = new Intern("Angie", 2, 'gmail', "UCR");

        expect(test.getName()).toEqual("Angie");
        expect(test.getId()).toEqual(2);
        expect(test.getEmail()).toEqual("gmail");
        expect(test.getRole()).toEqual("Intern");
        expect(test.getSchool()).toBe("UCR");
    })
})