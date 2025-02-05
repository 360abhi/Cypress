describe('Logging Test',()=>{
    it.skip('should log a message',()=>{
        cy.task('writeLog','This is a test log message');
    });
});

describe('Read json Data',()=>{
    it.skip('json',()=>{
        cy.task('readJson').then((data)=>{ // cy.task is async
            console.log(data);
        });
    });
});