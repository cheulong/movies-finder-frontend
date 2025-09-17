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

## Pipeline CI/CD
### prepare
#### install_dependencies:
Installs the project dependencies.
- Merge request: all
- Commit CI: all

### sast_scan
#### eslint
Runs the ESLint static code analysis tool.
- Merge request: all
- Commit CI: all
- allow_failure: false

#### gitleaks_scan
Runs the Gitleaks security scanner.
- Merge request: all
- Commit CI: all
- allow_failure: false
- artifacts: gitleaks-report.json

#### npm_audit
Runs the npm audit tool.
- Merge request: all
- Commit CI: all
- allow_failure: false

#### sonarcloud-check
Runs the SonarCloud security scanner.
- Merge request: dev
- Commit CI:

### test
#### unit_test:
Runs the unit tests.
- Merge request: all
- Commit CI: all
- allow_failure: false

#### playwright_test:
Runs the Playwright tests.
- Merge request: dev
- Commit CI:
- allow_failure: false
- artifacts: playwright-report/

### build
#### build:
Builds the Docker image.
- Merge request: dev
- Commit CI: dev

### security
#### trivy_scan:
Runs the Trivy security scanner.
- Merge request: dev
- Commit CI:
- allow_failure: false
- artifacts: trivy-report.json

#### syft_sbom:
Generates a Software Bill of Materials (SBOM) using Syft.
- Merge request:
- Commit CI: dev
- artifacts: sbom.spdx.json

#### grype_scan:
Runs the Grype vulnerability scanner.
- Merge request:
- Commit CI: dev
- allow_failure: false

### dast_scan
#### run_app:
Runs the application using Docker Compose.
- Merge request:
- Commit CI: dev

#### owap_zap:
Runs the OWASP ZAP security scanner.
- Merge request:
- Commit CI: dev
- artifacts: zap-report.html

### deploy
#### push_image:
Pushes the Docker image to Docker Hub.
- Merge request:
- Commit CI: dev

#### deploy_dev:
Deploys the application to the development environment.
- Merge request:
- Commit CI: dev
- environment: development

#### deploy_staging:
Deploys the application to the staging environment.
- Merge request:
- Commit CI: staging
- environment: staging

#### deploy_prod:
Deploys the application to the production environment.
- Merge request:
- Commit CI: main
- environment: production
- artifacts: image_tag.txt

### release
#### update_changelog:
Updates the changelog.
- Merge request:
- Commit CI: main

#### push_release_image:
Pushes the Docker image with version tag to Docker Hub.
- Merge request:
- Commit CI: main


### slack_notify
#### slack_notify
Sends a Slack notification.
- Merge request: all
- Commit CI: all

### clean_up
#### clean_up
Cleans up the Docker containers and temporary files.
- Merge request: all
- Commit CI: all
