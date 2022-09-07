import App from "../../src/App";

describe('App.cy.js', () => {
  it('playground', () => {
    cy.mount(<App />)
  })

  // it('opens the log in modle', () => {
  //   cy.get(THE ID FOR THE LOGIN MODEL).click()
  //   cy.get(ID FOR USERNAME FEILD).click()
  //   (input somthing in the user feild)
  //   cy.get(ID FOR password FEILD).click()
  //   (input somthing in the user feild)
  //   cy.get(ID FOR THE SUBMIT BUTTON).click()
  // })
})

