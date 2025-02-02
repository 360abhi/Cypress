import { CheckerEntries } from "../testcases/checkerEntries";

describe("Login Functionality", () => {
    const checker = new CheckerEntries();
        it('Checker',()=>{
            cy.fixture('testdata').then((data)=>{
                data.forEach(element => {
                    checker.check(element)
                });
            })
        })
  });



  
  