# Running on this machine
1. open docker
1. open kitmatic > login
1. start desired container

# Commands
`docker container ps` 
- show all running containers

`docker container ps -a` 
- show all containers

# Common actions
Remove one container:
- `docker stop CONTAINER`
- `docker rm CONTAINER`
- https://docs.docker.com/engine/reference/commandline/rm/

Remove all containers:
- `docker rm -f $(docker ps -aq)`
    - rm=remove
    - -f=force
    - $()=run this function inside of the other and feed the output to the outer function
    - -a=all, q=quiet(only ids)}
    - -f = kills everything
    - none = clean up (only stopped containers)

Remove all images:
- `docker rmi $(docker images -aq)`

# Creating containers


Creating a MongoDB container:
- `docker run -d -p 27017:27017 --name mongodb mongo`
