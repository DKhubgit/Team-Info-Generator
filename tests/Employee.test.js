const Employee = require('../lib/employee');


describe('Employee Class', () => {
    test('Should return the property values of the class', () => {
        const test = new Employee("Mike", 1, "gmail");

        expect(test.name).toBe("Mike");
        expect(test.id).toBe(1);
        expect(test.email).toBe("gmail");
    })

    test('Check the methods are returning the correct values', () => {

        const test = new Employee("Mike", 1, "gmail");

        expect(test.getName()).toEqual("Mike");
        expect(test.getId()).toEqual(1);
        expect(test.getEmail()).toEqual("gmail");
        expect(test.getRole()).toEqual("Employee");
    })
})