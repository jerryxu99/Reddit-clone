# Reddit-clone
This is my Reddit-esque web app built over 3 weeks in July 2021. The website functionality is relatively simple, allowing users to login, CRUD posts, 
vote on posts, and featuring smaller functionalities such as advanced caching, batched sql queries, pagination, and sorting.

The app is deployed at https://jxu-reddit-clone.herokuapp.com/

## Motivation
The purpose of this project was to try out new technologies. A major motivation behind this project was my interest to learn Typescript - I'm familiar with 
types from my experience in Java yet I love the stream-lined development of using javascript in the frontend and the backend. Hence I was excited to combine these 
previous experiences to learn Typescript by jumping right into a project. 

On the topic of learning new technologies, I figured I might as well try a completely new tech stack, steering away from my usual MERN. I had my first experience 
with SQL through Postgres, tried out browser cookies using Redis, implemented the front end with the popular NextJS, streamlined backend deployment using Docker, 
and transitioned away from a REST API and instead 
learned GraphQL. Although trying so many new technologies brought a tremendous amount of issues, I found a tremendous amount of value in throwing myself into a 
sea of unfamiliarity by carefully solving each issue through consultations with friends, documentation, and stack overflow.

## Technologies Used
* Typescript
* Node.js
* Express
* Postgres
* React / NextJS
* TypeGraphQL
* Redis
* Docker
* TypeORM
* Apollo Server
* URQL Client
* Chakra-UI

## All Functionalities
- authentication using session cookies stored in Redis
- optimally updates and invalidates the cache after logins, logouts, createPosts, deletePosts, upvotes
- change password with a nodemailer + uuid in url that corresponds to a user in Redis
- batched sql queries using dataloader
- view all posts with pagination that adds onto previously cached posts
- upvote and downvote posts once logged in as a user.
- create posts with description and timestamp
- redirects users if they are not authenticated for certain requests
- only allows users to update/delete their own post and dynamically updates ui accordingly.

## Known issues
1. The authentication cookie disappears after refresh. This is because the backend and frontend have different domains so the cross-domain cookies will not persist. 
This can be fixed if I purchase a domain and set up the backend as api.domain.com and the frontend as domain.com, which would allow cookies to persist even after 
a refresh. However, because this app was built for the sake of development, I will leave this issue hanging.
