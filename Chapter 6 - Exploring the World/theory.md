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
