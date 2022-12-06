const Intern = require('../lib/intern');

describe('Intern class', ()=>{
    it('should create a new intern with name, ID, email, and school properties', ()=>{
        const intern = new Intern("James", "123", "jei", "NIU")
        expect(intern.name).toBe('James')
        expect(intern.id).toBe("123")
        expect(intern.email).toBe("jei")
        expect(intern.school).toBe("NIU")
    })
})