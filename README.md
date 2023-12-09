### Microservices System with API Gateway

This project demonstrates a microservices system using Node.js and Docker Compose. It consists of services for chat, feed, video, gaming, and marketplace, along with an API gateway for request routing.

The services are containerized using Docker, making it easy to deploy and manage them. An NGINX-based load balancer is included to distribute traffic.

The API gateway handles request proxying, routing `/chat-service`, `/feed-service`, `/video-service`, `/gaming-service`, and `/marketplace-service` to their respective services.

To use the system, clone the repository and run `docker-compose up`. The API gateway will be available at `http://localhost:3000`, providing access to the individual services through the specified paths.

#### Author: Elijah Samson