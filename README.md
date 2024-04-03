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
* [x] Initial setup for full-stack application
* [x] REST API for interacting with AI models which are running locally
* [x] Serverless database integration
* [x] Passwordless authentication using Github (Social login)
* [x] Add UI framework(s) for client-side interaction
* [x] Add UI library
* [x] Logic for public and private pages
* [x] Develop UIs and page structure
* [ ] Private AI chat page
* [ ] CRUD operations for a resource in the app and in the REST API

#### Nice to have
* [ ] Passwordless authentication using [passkeys](https://passkeys.dev/)
* [ ] Conversation history - AI takes in consideration previous questions
* [ ] Stream responses - Display each piece of assistants answer while it is generating it
* [ ] Generate image with prompt

## Technology stack
* [Node.js](https://nodejs.org/en)
* [Astro](https://astro.build/)
* [LocalAI](https://localai.io/)
* [Xata](https://xata.io)
* [Auth.js](https://authjs.dev/)
* [React](https://react.dev/)
* [Shadcn UI](https://ui.shadcn.com/)
* [Radix UI](https://www.radix-ui.com/)
* [tailwindcss](https://tailwindcss.com/)
