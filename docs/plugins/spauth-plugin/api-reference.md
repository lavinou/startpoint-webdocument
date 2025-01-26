---
title: API Reference
sidebar_position: 4
---
# SPAuth Plugin - API Reference

Welcome to the SPAuth Plugin API Reference. This section provides an overview of the key classes and interfaces used to implement authentication and manage user sessions within the StartPoint framework.

## Key Classes and Interfaces

### 1. SPAuth
The core class responsible for managing authentication flows, session handling, and configuring authentication providers.
- **Purpose:** Manages sign-in, sign-up, and session lifecycles.
- **Key Methods:**
  - `addAuthBackend(authenticate: SPAuthenticationBackend)`
  - `authenticate(credential: Credential): SPAuthToken`
  - `userSession<TUser : SPAuthUser<*>>(): SPAuthUserSession<TUser>`

---

### 2. SPAuthConfiguration
A configuration class used to define routes, session behavior, and UI elements for the SPAuth plugin.
- **Purpose:** Configures and installs SPAuth within StartPoint.
- **Key Properties and Methods:**
  - `title: String`
  - `signInButtonRoute: Any`
  - `signUpButtonRoute: Any`
  - `setUserSessionBackend(backend: SPUserSessionBackend<TUser>)`
  - `addProvider(provider: SPAuthProvider<TBuilder, TPlugin>, configure: TBuilder.() -> Unit)`

---

### 3. SPAuthProvider
An interface for adding custom authentication providers to SPAuth.
- **Purpose:** Enables integration with third-party or custom authentication flows.
- **Key Properties and Methods:**
  - `key: AttributeKey<TProvider>`
  - `graph: NavGraphBuilder.(NavHostController) -> Unit`
  - `prepare(block: TConfig.() -> Unit): TProvider`
  - `install(plugin: TProvider, scope: SPAuth)`

---

### 4. SPAuthUserSession
Manages the lifecycle and state of authenticated users, providing session tracking and user flow.
- **Purpose:** Tracks the currently authenticated user and handles session logout.
- **Key Properties and Methods:**
  - `user: TUser?`
  - `userFlow: Flow<TUser>`
  - `logout(): Boolean`
  - `isLoggedIn(): Boolean`

---

### 5. SPAuthUser
Represents an authenticated user, providing core user details.
- **Purpose:** Encapsulates user data and identifiers.
- **Key Properties:**
  - `id: String`
  - `value: T`

---

### 6. SPAuthStorage
An interface for handling storage and retrieval of authentication tokens.
- **Purpose:** Manages persisting and observing token changes.
- **Key Properties and Methods:**
  - `token: SPAuthToken?`
  - `tokenFlow: Flow<SPAuthToken?>`
  - `save(token: SPAuthToken?)`
  - `retrieve(): SPAuthToken`

---

### 7. SPAuthenticationBackend
Interface responsible for authenticating user credentials and issuing tokens.
- **Purpose:** Validates credentials and returns authentication tokens.
- **Key Properties and Methods:**
  - `type: String`
  - `authenticate(credential: Credential): SPAuthToken`

---

### 8. SPUserSessionBackend
Manages user session operations, such as logout and fetching user data.
- **Purpose:** Defines logic for session management and user retrieval.
- **Key Methods:**
  - `logout(token: SPAuthToken): Boolean`
  - `user(token: SPAuthToken?): TUser`

---

### 9. SPAuthToken
Represents the authentication token returned after a successful login.
- **Purpose:** Contains access and refresh tokens, as well as expiration details.
- **Key Properties:**
  - `accessToken: String`
  - `refreshToken: String`
  - `expiresAt: Long`
  - `Default: SPAuthToken` (companion object)

---

This reference serves as a starting point for deeper exploration of the SPAuth API. For further details on method signatures and usage examples, refer to the inline KDoc documentation within your codebase.

