# graphql-express

 GraphQL, Node.js, MongoDB and React.js

# References 
* https://www.youtube.com/watch?v=sOUNgOx0GcU&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_&index=5
*  https://graphql.org/graphql-js/running-an-express-graphql-server/

1. Call nodemon app

2. localhost:4000/graphql to open graphiql

Example query
```
{
 book(id: "1"){
 name 
  genre 
  id
}
}
```

Example result
```javascript
{
  "data": {
    "book": {
      "name": "Name of the Wind",
      "genre": "Fantasy",
      "id": "1"
    }
  }
}

```


#### Create Even in MongoDB using mongoose

```
mutation {
  createEvent(eventInput:{title:"a test", description:"does", price:9.99, date:"2020-09-24T00:36:50.001Z"})
  
		{
      _id
      title}
	}
```
	
### Get Data
```
	query {
	   events {
	   title
	   description
	   }
	}
```


### Sample Create User
```

mutation {
  createUser(userInput: {email: "test@test.com", password: "tester"}) {
    email
    password
  }
}


```
