https://hub.docker.com/_/postgres
`docker pull postgres`

https://medium.com/@wkrzywiec/database-in-a-docker-container-how-to-start-and-whats-it-about-5e3ceea77e50

- `docker run --name postgres-docker -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres`

- `docker exec -it <NAME OF CONTAINER> bash` 
    - good resource that actively using psql command line https://snipcart.com/blog/graphql-nodejs-express-tutorial
    
