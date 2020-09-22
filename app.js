const express = require ('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');


const app = express();

app.use(bodyParser.json());

app.get('/', (req, res,next) => {
    res.send('Express is up!');
})

app.use('/graphql', graphqlHTTP({
    //configuration of graphql (schema) , queries, and resolvers
    schema: buildSchema(`
        type RootQuery {
            events:  [String!]!
        }
        
        type RootMutation {
            createEvent(name: String) : String
        
        }
    
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `
    ),
    rootValue:{
        events :() => {
            return ['Sailing', 'Reading', 'Sleeping', 'COVID-19 safe activities maybe?']
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName.toUpperCase();
        }

    },
    graphiql: true
}))

app.listen(3000);
