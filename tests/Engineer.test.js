const Engineer = require('../lib/engineer');

describe("Engineer Class", () => {
    test("Create class and checks property values", () => {
        const test = new Engineer("Angie", 2, 'gmail', "angieGG");

        expect(test).toEqual({name: "Angie", id: 2, email: 'gmail', username: "angieGG"})
    })

    test("Check if the methods return the correct values", () => {
        const test = new Engineer("Angie", 2, 'gmail', "angieGG");

        expect(test.getName()).toEqual("Angie");
        expect(test.getId()).toEqual(2);
        expect(test.getEmail()).toEqual("gmail");
        expect(test.getRole()).toEqual("Engineer");
        expect(test.getGithub()).toBe(`https://github.com/angieGG`);
    })
})