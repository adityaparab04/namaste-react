## Namaste React Course by Akshay Saini

# _Chapter 06 - Exploring the World_

### Theory explained the course

- `Monolith`

  - Comprises of multiple small architectures.

- `Microservices`

  - Multiple services working together.
  - E.g. UI service, Backend API service, Authentication Service, Database service and other small services.
  - These small services which are separate projects combine to be a big application.
  - This is called separation of concerns and follows a single responsibility principal. Each has it's own job and nobody interfere's with it.
  - This microservice architecture helps in progressing faster for any application.
  - This namaste react course comes under UI microservice.
  - All these services run on their on specific ports. (E.g. In JustDeliver on port1234 - UI service)
  - All these ports are mapped to a domain name (E.g. `/api` for backed, Ui on `/`)
  - This services are connected to each other by calling the API.

#### This Lecture comprises of connecting to other microservices.

- Rendering types

  - Page Loads -> API Called -> Rendered the content
  - Page Loads -> Render Content -> API called -> ReRender

- We will use the second approach as it gives better UI experience as react has better render speed than most UI libraries and Frameworks.

### HOOKS

- UseEffect Hook:

  - It's a inbuilt react function also called hooks. It's always called after the render.
  - It takes 2 arguments :
    - A callback function
    - Dependency array
  - Dependency Array:
    - Decides when the useEffect function's callback function is called.
    - Even if empty array the function is called once the page renders and happens in order, first useEffect will be called first.

- fetch() function:

  - Browser function or Window function. Helps to fetch the data from API's. JS engine uses it to fetch data.
  - Definition from MDN docs: The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest

- Response: json() method
  - The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
