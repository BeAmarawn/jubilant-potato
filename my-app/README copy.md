Code Challenge
Senior Fullstack Engineer (Frontend-Oriented)

Duration: 40 minutes

Objective

Build a small frontend-focused fullstack feature that demonstrates your ability to:

Design clean, maintainable React + Next.js components using TypeScript

Interact with a backend API using a clear, typed contract

Handle common UI and data edge cases

Make sound technical decisions under time constraints

Reason about scalability, reliability, and observability

This challenge is not about finishing everything.
It is about code quality, structure, and engineering judgment.

Challenge Description

You are asked to implement a simple Task Manager feature.

Users should be able to:

View a list of tasks

Add a new task

Toggle a task’s completed state

Requirements

1. Frontend (Primary Focus)

Use Next.js (App Router) with React and TypeScript

Fetch tasks from a backend API

Display tasks with their completion status

Provide a form to create a new task

Allow toggling the completed state of a task

Handle the following UI states:

Loading

Empty list

Error

Keep the UI simple and usable (styling is not important)

Testing

Write one meaningful unit test for either:

the task list, or

the task creation flow

The test should validate behavior, not just rendering.

2. Backend (Supporting, Minimal)

Implement backend logic using Next.js API Route Handlers

Endpoints:

GET /api/tasks

POST /api/tasks

PATCH /api/tasks/:id

Use an in-memory data store (no database required)

Use TypeScript and typed request/response objects

Add basic input validation:

task title is required

task title should be trimmed and non-empty

Return proper HTTP status codes (200, 201, 400, 404)

Use a consistent error response shape (for example:
{ error: { message } })

The backend should support the frontend cleanly.
Over-engineering is not expected.

3. Optional – Senior Engineering Signals

(Scalability, Reliability, Observability)

This section is optional and intended to highlight senior-level thinking.
You do not need to fully implement these concepts.

You may choose one of the following:

Add brief comments or a short README describing:

how this feature would scale with more users or data

how reliability would be improved (validation, error handling, retries, idempotency)

how observability could be added (logging, metrics, tracing)

OR

Add a small code example showing:

structured logging

basic error classification

or a design choice that enables future scalability

Focus on design decisions and trade-offs, not full implementations.

General Guidelines

Use TypeScript everywhere

Favor readability and clarity over completeness

You do not need to finish everything to get full credit

If something is missing, briefly explain what you would do next

What We Are Evaluating

Component and code structure

Type safety and API design

Handling of UI and data edge cases

Testing intent and quality

Ability to make sensible trade-offs under time pressure

Understanding of scalability, reliability, and observability concepts

What We Are NOT Evaluating

Visual design or CSS quality

Authentication or authorization

Database persistence

Production-level optimizations

Kubernetes, CI/CD, or infrastructure setup

Notes

You may keep frontend and backend in the same Next.js project

You may stub or simplify anything not essential

If you run out of time, leave comments explaining your approach
