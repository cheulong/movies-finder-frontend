## Concept
### Static code analysis
**static code analysis** is a method of debugging that examines source code without executing the program. We should scan the source code in IDE and also in pipeline. Static code analysis is used to find bugs, security vulnerabilities, and code smells.It seperates into two parts: Static Application Security Testing (SAST) and Software Composition Analysis (SCA).

#### Static Application Security Testing (SAST)
Static Application Security Testing (SAST) is a set of techniques used to identify security vulnerabilities in software applications. It is performed by scanning the source code of the application without executing it. The goal of SAST is to find security vulnerabilities that can be exploited by attackers to gain unauthorized access to the application or to cause damage to the application.

Tools:
- SonarQube
- ESLint
- GitLeaks


#### Software Composition Analysis (SCA)
Software Composition Analysis (SCA) is a method of analyzing the structure and behavior of software systems. It examines the relationships between different components of a software system and identifies any vulnerabilities or weaknesses in the system. SCA is performed by analyzing the source code of the software system and looking for patterns and dependencies that may indicate security vulnerabilities.

Tools:
- NPM Audit
- OWASP Dependency Check

#### Dynamic Application Security Testing (DAST)
Dynamic Application Security Testing (DAST) is a set of techniques used to identify security vulnerabilities in software applications. It is performed by executing the application and monitoring its behavior. The goal of DAST is to find security vulnerabilities that can be exploited by attackers to gain unauthorized access to the application or to cause damage to the application.

Tools:
- OWASP ZAP
- OWASP CoreRuleSet

### Software Bill of Materials (SBOM)
A Software Bill of Materials (SBOM) is a list of all the components used in a software application, including the libraries, frameworks, and other dependencies. It provides a detailed view of the software components and their versions, making it easier to identify and manage dependencies.

Tools:
- Syft
- Grype

### Image Scanning
Image scanning is the process of analyzing an image to identify any vulnerabilities or security issues. It is performed by scanning the image for known vulnerabilities, misconfigurations, and other security weaknesses. Image scanning is an important part of the software development lifecycle, as it helps ensure that the software is secure and free from vulnerabilities.

Tools:
- Trivy
- Anchore


## Implementation

Here I am using Gitlab CI/CD pipeline to implement the concept of static code analysis. I have used the following tools:

1. Gitleaks
2. SonarQube
3. ESLint
4. NPM Audit
5. OWASP Dependency Check
6. OWASP ZAP
7. OWASP CoreRuleSet
8. Syft
9. Grype
10. Trivy
11. Playwright
12. Anchore
13. Gitlab CI/CD
14. Docker
15. Kubernetes
16. Helm
