### To start the dev server locally in docker:

`docker container run -it --rm -p 3000:3000 -v $PWD:/app node:carbon-jessie-slim bash`  
Then cd into `/app` and run `npm start or npm run watch`

### To connect to a database on the host machine use the following:  
On Windows/Mac the host ip is `host.docker.internal`  
For Ubuntu refer https://nickjanetakis.com/blog/docker-tip-65-get-your-docker-hosts-ip-address-from-in-a-container
