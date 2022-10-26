/// <reference types="cypress" />

// teste da calculadora


describe('testando soma', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('testando 2+2', ()=>{
        cy.get('#numero1').type("2")
        cy.get('#numero2').type("2")
        cy.get('[onclick="somar()"]').click()
        cy.get('span').should("have.text", "4")
    })
    it('testando 2+(-3)', ()=>{
        cy.get('#numero1').type("2")
        cy.get('#numero2').type("-3")
        cy.get('[onclick="somar()"]').click()
        cy.get('span').should("have.text", "-1")
    })
    it('testando 5+0', ()=>{
        cy.get('#numero1').type("5")
        cy.get('#numero2').type("0")
        cy.get('[onclick="somar()"]').click()
        cy.get('span').should("have.text", "5")
    })
})
describe('testando subtração', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('testando 10-0', ()=>{
        cy.get('#numero1').type("10")
        cy.get('#numero2').type("0")
        cy.get('[onclick="subtrair()"]').click()
        cy.get('span').should("have.text", "10")
    })
    it('testando 0-10', ()=>{
        cy.get('#numero1').type("0")
        cy.get('#numero2').type("10")
        cy.get('[onclick="subtrair()"]').click()
        cy.get('span').should("have.text", "-10")
    })
    it('testando 0-0', ()=>{
        cy.get('#numero1').type("0")
        cy.get('#numero2').type("0")
        cy.get('[onclick="subtrair()"]').click()
        cy.get('span').should("have.text", "0")
    })
    it('testando 0-0', ()=>{
        cy.get('#numero1').type("5")
        cy.get('#numero2').type("5")
        cy.get('[onclick="subtrair()"]').click()
        cy.get('span').should("have.text", "0")
    })
})
describe('testando Multiplicação', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('testando 6x6', ()=>{
        cy.get('#numero1').type("6")
        cy.get('#numero2').type("6")
        cy.get('[onclick="multiplicar()"]').click()
        cy.get('span').should("have.text", "36")
    })
    it('testando 6x(-6)', ()=>{
        cy.get('#numero1').type("6")
        cy.get('#numero2').type("-6")
        cy.get('[onclick="multiplicar()"]').click()
        cy.get('span').should("have.text", "-36")
    })
    it('testando 6x0', ()=>{
        cy.get('#numero1').type("6")
        cy.get('#numero2').type("0")
        cy.get('[onclick="multiplicar()"]').click()
        cy.get('span').should("have.text", "0")
    })
    it('testando 0x6', ()=>{
        cy.get('#numero1').type("0")
        cy.get('#numero2').type("6")
        cy.get('[onclick="multiplicar()"]').click()
        cy.get('span').should("have.text", "0")
    })
})
describe('testando divisão', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('testando 10/2', ()=>{
        cy.get('#numero1').type("10")
        cy.get('#numero2').type("2")
        cy.get('[onclick="dividir()"]').click()
        cy.get('span').should("have.text", "5")
    })
    it('testando 5/2', ()=>{
        cy.get('#numero1').type("5")
        cy.get('#numero2').type("2")
        cy.get('[onclick="dividir()"]').click()
        cy.get('span').should("have.text", "2.5")
    })
    it('testando 5/0', ()=>{
        cy.get('#numero1').type("5")
        cy.get('#numero2').type("0")
        cy.get('[onclick="dividir()"]').click()
        cy.get('span').should("have.text", "Infinity")
    })
    it('testando 0/5', ()=>{
        cy.get('#numero1').type("0")
        cy.get('#numero2').type("5")
        cy.get('[onclick="dividir()"]').click()
        cy.get('span').should("have.text", "0")
    })
})
describe('testando limpar campos e resultados', ()=>{
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })
    it('testando limpar', ()=>{
        cy.get('#numero1').type("10")
        cy.get('#numero2').type("2")

        cy.get('[onclick="dividir()"]').click()
        cy.get('span').should("have.text", "5")

        cy.get('[onclick="limpar()"]').click()
        cy.get('#numero1').should("have.text", "")
        cy.get('#numero2').should("have.text", "")
    })
})