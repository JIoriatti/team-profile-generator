const Manager = require('../lib/manager');

describe('Manager class', ()=>{
    it('should create a new manager with name, ID, email, and office number properties', ()=>{
        const manager = new Manager("James", "123", "jei", "5555")
        expect(manager.name).toBe('James')
        expect(manager.id).toBe("123")
        expect(manager.email).toBe("jei")
        expect(manager.officeNumber).toBe("5555")
    })
})