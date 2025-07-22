A simple landing page - asian restaurant landing page with react

## Getting Started

### Prerequisites

- React.js
- Docker

### Running the app

```bash
docker compose -f compose.dev.yaml up
```

### Stopping the app

```bash
docker compose -f compose.dev.yaml down 'web' --rmi local --volumes
```

### Building the app

```bash
docker build -f Dockerfile.prod -t <username>/asian-food-web:1.0.0 .
```

## Pushing the app to Docker Hub

```bash
docker push <username>/asian-food-web:1.0.0
```