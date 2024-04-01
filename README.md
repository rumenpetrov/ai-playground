# [WIP] AI playground
> This project is currently a work in progress. It's actively being developed, and features may change frequently.

Learning application for trying out AI-related features and building simple REST API.

### Software requirements
* docker and compose 24+

### Hardware requirements
> ⚠️ **Warning**
> Running AI models locally is resource intensive task. Your machine could run out of resources. Make sure you have **at least 8GB of free RAM**, **15GB free storage space** (for LLMs) and your CPU doesn't running any other heavy tasks.

## Initial setup (for local development)
> 🛑 **Important**
> This is not intended for production. Run this on your machine only.

1. Create the environment variables file and set all the required values
```sh
$ cp .env.example .env
```
2. Start the application
```sh
$ docker-compose up
```

### Services
| Service  | Port |
|----------|------|
| localai  | 8080 |
| frontend | 4321 |

## Objectives checklist

#### Must
* [x] Initial Astro application setup
* [x] REST API for interacting with AI models which are running locally
* [x] Serverless database integration
* [x] Passwordless authentication using Github (Social login)
* [ ] Add UI framework(s) for client-side interaction
* [ ] Add UI library
* [ ] Logic for public and private pages
* [ ] Develop UIs and page structure
* [ ] Protected AI chat page
* [ ] Present information collected through REST API on the client-side

#### Nice to have
* [ ] Passwordless authentication using pass keys
* [ ] Conversation history - AI takes in consideration previous questions
* [ ] Stream responses - Display each piece of assistants answer while it is generating it
* [ ] Generate image with prompt

## Technology stack
* [Node.js](https://nodejs.org/en)
* [Astro](https://astro.build/)
* [LocalAI](https://localai.io/)
* [Xata](xata.io)
* [Auth.js](https://authjs.dev/)