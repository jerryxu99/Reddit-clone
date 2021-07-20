#! /bin/bash
npm run build
heroku container:push -a cryptic-garden-67064 web
heroku container:release -a cryptic-garden-67064 web