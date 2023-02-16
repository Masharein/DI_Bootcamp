Promise is something that will be resolved of rejected in the future
--> promises are asynchronous
--> a promise contains
    - state : fulfilled, rejected
    - result : value

In order to retrieve this result, I need to consume the promise
--> then , catch

New Syntax
Async function
and inside Await the promise
    --> waits for the promise to be resolved, or reject
    --> it retrieves the result of the promise

Third Party APIS : companies created those APIS : a url path that retrives JSON data
from a server

-- fetch used to send request to a server (GET, POST, PUT, DELETE) --> CRUD (create, read, update, delete)

fetch method : WEB API : bunch functions that the browser is making available for the developers
--> based on Promises so its asynchronous
METHOD FETCH

```js
async function getData(){
    const response = await fetch(url);
}
```

--> returns a promise 
--> lets say the state is fulfilled, 
        --> result Response obj
    from the Response obj we can use the status key to check if everything is ok

-- WE HAVE A PROBLEM
    --> Response object is great but the data from the server is not visible
    --> we need to use the method called json() 
        -> **returns a promise**
            --> fulfilled
            --> result : result of parsing the body text as JSON.

```js
async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data) //whatever info from the server
}
```

## PROMISE.ALL

returns a single Promise. 