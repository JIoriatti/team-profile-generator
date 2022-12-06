const Engineer = require('../lib/engineer');

describe('Engineer class', ()=>{
    it('should create a new engineer with name, ID, email, and github properties', ()=>{
        const engineer = new Engineer("James", "123", "jei", "JIoriatti")
        expect(engineer.name).toBe('James')
        expect(engineer.id).toBe("123")
        expect(engineer.email).toBe("jei")
        expect(engineer.github).toBe("JIoriatti")
    })
})