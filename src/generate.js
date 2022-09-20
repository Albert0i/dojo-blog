module.exports = () => {
    const { faker } = require("@faker-js/faker")
    const _ = require("lodash")

    return { blogs: _.times(10, function(n) {
                return {                    
                    title: faker.hacker.phrase(),
                    body: faker.lorem.paragraph(),
                    author: faker.name.firstName(), 
                    id: n
                } 
        })
    }
}
/**
    Creating Demo APIs with json-server
    https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
 
    npm | @faker-js/faker
    https://www.npmjs.com/package/@faker-js/faker

    npm | lodash 
    https://www.npmjs.com/package/lodash

 */