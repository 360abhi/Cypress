describe('Logging Test',()=>{
    it('should log a message',()=>{
        cy.task('writeLog','This is a test log message');
    });
});

describe('Read json Data',()=>{
    it('json',()=>{
        cy.task('readJson').then((data)=>{ // cy.task is async
            console.log(data);
        });
    });
});