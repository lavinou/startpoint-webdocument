---
title: Overview
sidebar_position: 1
---
# SPAuth Plugin - Overview

The **SPAuth Plugin** is a core authentication module for the StartPoint framework, designed to streamline user authentication and session management. This plugin provides essential tools to handle sign-in, sign-up, and user session lifecycles through a flexible and customizable backend interface.

## Key Features
- **Multiple Authentication Backends** – Easily integrate different authentication providers (OAuth, email/password, etc.) by implementing custom backends.
- **User Session Management** – Seamlessly manage user sessions with token-based storage and retrieval.
- **Customizable Flow** – Configure sign-in, sign-up routes, and UI elements to fit your application needs.
- **Security Focused** – Built with modern security practices, including token expiration and refresh handling.

## Why Use SPAuth?
SPAuth simplifies authentication for developers by providing an extensible system that integrates directly with StartPoint. Whether you're building a simple app or a complex enterprise solution, SPAuth allows you to:
- Abstract authentication logic to a single point.
- Manage multiple user types and sessions.
- Support complex authentication workflows with minimal overhead.

## How It Works
SPAuth operates by configuring an **SPAuthConfiguration** object that defines the core settings, such as routes and session behavior. Authentication backends are added by implementing the **SPAuthenticationBackend** interface, allowing you to support various credential types and flows.

User sessions are managed using **SPAuthUserSession**, which tracks the currently authenticated user and their token. The plugin also offers extension functions to easily access user sessions from StartPoint.

## Next Steps
- Learn how to [set up SPAuth](./setup) in your project.
- Dive into the [API Reference](./api-reference) for detailed class and method documentation.

