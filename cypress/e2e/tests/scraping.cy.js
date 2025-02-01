describe('Scraping Suite',()=>{
    it('Simple Scrape',()=>{
        cy.visit('https://sauce-demo.myshopify.com/')
        cy.xpath("//a[@class='checkout']").invoke('text').then((text)=>{
            cy.task('writeLog',text);
        })
    });

    it('Scraping multiple',()=>{
        cy.visit('https://sauce-demo.myshopify.com/');
        let userdata = []

        cy.xpath("//li").each((webelement,index)=>{
            cy.wrap(webelement).invoke('text').then((text)=>{
                userdata.push({[index]:text});
            })
        }).then(()=>{
            cy.task('saveJsonData',userdata)
        })
    })
});

