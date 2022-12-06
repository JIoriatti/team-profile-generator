const Employee = require('../lib/employee');

describe('Employee class', ()=>{
    it('should create a new employee with name, ID, and email properties', ()=>{
        const employee = new Employee("James", "123", "jei")
        expect(employee.name).toBe('James')
        expect(employee.id).toBe("123")
        expect(employee.email).toBe("jei")
    })
})