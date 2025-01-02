---
title: Setup
sidebar_position: 2
---
# SPAuth Plugin - Setup

This guide walks you through the process of setting up the SPAuth Plugin in your StartPoint project. By the end of this tutorial, you will have SPAuth integrated and ready to manage user authentication.

## Prerequisites
- A working StartPoint project.
- Basic understanding of Kotlin and coroutine flows.
- Access to your preferred authentication backend or provider.

## Installation
To begin, add the SPAuth dependency to your project:

```kotlin
implementation("com.github.lavinou.startpoint-android:auth")
```

Ensure you sync the project after adding the dependency.

## Configuration
Install SPAuth using the `rememberStartPoint` block, where you can configure core authentication settings directly:

```kotlin
val startPoint = rememberStartPoint {
    install(SPAuth) {
        title = "Welcome"
        signInButtonRoute = "/login"
        signUpButtonRoute = "/register"
        image = R.drawable.auth_image

        val userSessionBackend = CustomUserSessionBackend()
        setUserSessionBackend(userSessionBackend)
    }
}
```

### Configuring User Sessions
To manage user sessions, implement the `SPUserSessionBackend` interface. This allows you to define how user data is retrieved and managed during authentication.

```kotlin
class CustomUserSessionBackend : SPUserSessionBackend<MyAuthUser> {
    override suspend fun logout(token: SPAuthToken): Boolean {
        // Perform logout logic
        return true
    }

    override suspend fun user(token: SPAuthToken?): MyAuthUser {
        // Fetch user data based on token
        return MyAuthUser("user123", "example@example.com")
    }
}
```

## Testing the Setup
To verify the setup, trigger an authentication request using the SPAuth instance:

```kotlin
val credential = Credential("email", "password123")
val token = startPoint.plugin(SPAuth).authenticate(credential)
println("User authenticated with token: ${token.accessToken}")
```

## Next Steps
- Customize user session handling by overriding `SPAuthUserSession`.
- Implement additional backends to support multiple authentication methods.
- Refer to the [API Reference](./api-reference) for detailed method documentation.

