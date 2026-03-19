---
sidebar_position: 3
date: 2015-10-28T18:50:00
---

<iframe width="100%" height="400" src="https://www.youtube.com/embed/A8MetRHGv4U" title="2015.10.28 Артём Курапов – Многообразие автоматических тестов" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- [PDF slides](varietyofautomatedtests-151028134806-lva1-app6892.pdf)

<!-- truncate -->

## Black-box

This family of tests treats the system under test as an isolated object with limited knowledge about its internals.

- Basic scenario/UI tests. They map to features and mostly verify navigation and presence of HTML elements.
- Advanced UI tests. Automated and efficient. They cover all user roles, reset data, and abstract repeated functions. Medium priority.

- drag-and-drop
- testing role-based privileges
- multi-threaded file upload
- websocket tests for cross-browser data synchronization

- Behavioral tests. Written for business stakeholders to show what is tested, but require a parser layer underneath.
- Screenshot and CSS regression tests. Validate broken UI, fonts, different browsers, and phones.
- [Snapshot tests](https://facebook.github.io/jest/docs/snapshot-testing.html)

## Gray-box

This family of tests treats the system at the service and process level.

- Environment diagnostics for resource availability.
- Service availability checks.
- External API checks (a predecessor of contract tests). High priority.

- availability checks
- predictable format checks (simple GET + JSON validation), making sure format does not change
- full write interactions (usually a partner company and developer set up a dedicated test machine)

- Internal API checks. Run without browser via CURL requests emulating JavaScript or mobile clients. High priority.

- class/interface compatibility
- simple GET requests verifying absence of errors/stack traces
- POST/PUT requests that modify data
- in advanced cases (mobile apps), when e2e tests cannot be run on-device, these become sequential scenario requests preserving entity/user state (DB + session)

- [Concurrency](https://kurapov.ee/rus/lab/quality_control/phpunit/concurrency_deadlock_integration_tests/) testing. Detecting backend deadlocks.
- Data integrity.

- integrity between DB tables and/or files
- comparison of [entity classes](http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/reference/basic-mapping.html) with DB schema
- DB migrations

- Configuration matrix testing (supporting multiple platforms)
- Performance testing. Service/code test runs to understand efficiency.

- response time/speed
- backend memory, CPU, IO proportions in RAM/HDD/network, query counts
- frontend number of network requests

- Memory leak testing and event-listener count testing (especially for UI components)
- Load/stress tests. What happens under very high traffic. Finding the weakest link.
- Failover tests (DB down, Rabbit down, service down). Backup strategy, error handling, monitoring.
- Injection tests. Fuzzy testing.

- injection control: SQL, XSS
- data format argument variation: mixed types, filepaths
- file/directory permissions

## White-box

- Unit tests

- Backend: Medium priority. Special cases like random() distribution and resource handling (image generation)
- Frontend: Low priority. Jest, Karma + Jasmine, Mocha

- Private methods
- Mocks
- Contracts

- API contracts
- Library contracts

- Virtual database
- Virtual filesystem
- Mutation tests: disabling app parts to detect dependencies and failure percentage
- Multi-threaded process testing
