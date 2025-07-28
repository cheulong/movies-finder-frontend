# Movies Finder Frontend
A ReactJs app to fetch movie list from backend.

## Getting Started

### Prerequisites

- React.js
- Docker

### Running the app

```bash
docker compose -f compose.dev.yml up
```

### Stopping the app

```bash
docker compose -f compose.dev.yml down 'web' --rmi local --volumes
```

### Building the app

```bash
docker build -f Dockerfile.prod -t <username>/movies-finder-frontend:1.0.0 .
```

## Pushing the app to Docker Hub

```bash
docker push <username>/movies-finder-frontend:1.0.0
```