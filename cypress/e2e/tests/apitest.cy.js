
describe("API suite",()=>{
    it.skip('First API TEST', () => {
        cy.intercept('GET','https://randomuser.me/api/?nat=us&randomapi',{
            statusCode:200,
            body : {
                "results": [
                    {
                        "gender": "male",
                        "name": {
                            "title": "Mr",
                            "first": "God",
                            "last": "Abhishek"
                        },
                        "location": {
                            "street": {
                                "number": 9179,
                                "name": "Lovers Ln"
                            },
                            "city": "Mumbai",
                            "state": "Maharashtra",
                            "country": "India",
                            "postcode": 42541,
                            "coordinates": {
                                "latitude": "-4.4150",
                                "longitude": "-80.0625"
                            },
                            "timezone": {
                                "offset": "+6:00",
                                "description": "Almaty, Dhaka, Colombo"
                            }
                        },
                        "email": "jessie.perez@example.com",
                        "login": {
                            "uuid": "7bce7ee5-49af-4145-86b0-f5261562eb33",
                            "username": "redbear984",
                            "password": "gateway2",
                            "salt": "rJP0fqvF",
                            "md5": "a8635b1cf59efaf1da4089d3ccaa5a39",
                            "sha1": "21fc0f28c37b753e1e5278fc7f208ca3afd6e97a",
                            "sha256": "34305ed0a0dbe227de4af3de919adccf440e903736b013a5fd0471bab9f7bc23"
                        },
                        "dob": {
                            "date": "1962-12-10T07:37:27.673Z",
                            "age": 62
                        },
                        "registered": {
                            "date": "2005-04-21T08:35:33.019Z",
                            "age": 19
                        },
                        "phone": "(233) 387-2295",
                        "cell": "(625) 262-3695",
                        "id": {
                            "name": "SSN",
                            "value": "018-31-2442"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/men/41.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
                        },
                        "nat": "US"
                    }
                ],
                "info": {
                    "seed": "dc48abea6a31145b",
                    "results": 1,
                    "page": 1,
                    "version": "1.4"
                }
            }
        }).as('getUser'); 

        cy.visit('https://randomuser.me/'); 
        cy.wait('@getUser').its('response.statusCode').should('eq', 200);

        cy.get('#user_value').should('include.text','Abhishek')
    });

    it.skip('Internal Server Error Test', () => {
        cy.intercept('GET','https://randomuser.me/api/?nat=us&randomapi',{
            statusCode:500
        }).as('getUserError');

        cy.visit('https://randomuser.me/'); 
        cy.wait('@getUserError');
        
        cy.get("#user_value").should('include.text','...');
        cy.log('Server Error');
    });

    it('API Delay Test - 2', () => {
        cy.intercept('GET','https://fakerestapi.azurewebsites.net/api/v1/Activities',(req)=>{
            req.on('response',(res)=>{
                res.setDelay(2000);
            });
        }).as('delay')

        cy.visit('https://fakerestapi.azurewebsites.net/index.html');
        cy.xpath("(//span[.='GET'])[1]").click();
        cy.xpath("//button[@class='btn try-out__btn']").click();
        cy.xpath("//div[@class='loading']").should("not.exist");
        cy.xpath("//button[.='Execute']").click();
        cy.xpath("//div[@class='loading']").should('exist');
        cy.wait("@delay");
        cy.xpath("(//td[@class='response-col_status'])[1]").should('include.text',"200");
    });
    
});