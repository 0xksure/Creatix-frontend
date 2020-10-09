# Creatix frontend

Project is written in typescript.

## Run with docker

### Build:

```
    docker image build creatix .
```

### Run

```
    docker container run -p 3030:80 creatix
```

## Deploy

Automatic CI pipeline in github actions. The webapp is hosted on heroku using express server to serve the webpack builds.
