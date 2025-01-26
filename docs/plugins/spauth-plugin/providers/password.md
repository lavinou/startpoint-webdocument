---
id: password-provider
title: Password
description: Documentation for configuring the Password Provider in SPAuth.
sidebar_position: 1
---

# Password Provider Documentation

## Overview

The Password Provider in **SPAuth** facilitates password-based authentication by connecting to a backend system, validating user inputs, and defining result-handling logic for authentication flows. It supports sign-in and sign-up processes with flexibility for customization.

## Installation
To begin, add the SPAuth dependency to your project:

```kotlin
implementation("com.github.lavinou.startpoint-android:auth-password")
```


---

## Configuration

To use the Password Provider, you need to configure it within the **SPAuth** setup and define the following:

- **Backend**: Handles server-side authentication logic.
- **Validators**: Ensure the correctness of user inputs (e.g., email, password).
- **Result Handlers**: Specify actions to take based on the authentication outcome.

---

## Example: Setting Up the Password Provider

Here’s an example of how to configure the Password Provider with SPAuth:

```kotlin
install(SPAuth) {

    title = "Welcome"

    signInButtonRoute = BiometricSignIn
    signUpButtonRoute = PasswordSignUp

    image = R.drawable.app_icons

    exitOnUserCancel = false

    setUserSessionBackend(userSessionBackend)

    addProvider(Password) {
        backend = passwordBackend
        passwordValidators()  // Add input validation rules
        resultHandlers()      // Define result handling logic
    }
}
```

---

## Adding Input Validators

Input validation ensures that users provide acceptable values for fields like email, password, and full name. You can add these rules using the `addValidator` method in the `PasswordConfiguration` class.

### Example: Password Validators

Define validation rules for various fields:

```kotlin
fun PasswordConfiguration.passwordValidators() {
    addValidator(
        key = USER_KEY,
        rule = { value -> value.isBlank() },
        message = "Make sure to enter an email address"
    )
    addValidator(
        key = PASSWORD_KEY,
        rule = { value -> value.isBlank() },
        message = "Please add your password"
    )
    addValidator(
        key = PASSWORD_KEY,
        rule = { value -> value.length in 1..7 },
        message = "Password is too short."
    )
    addValidator(
        key = FULL_NAME_KEY,
        rule = { value -> value.isBlank() },
        message = "Please add your full name"
    )
}
```

---

## Handling Authentication Results

The `onResult` property defines how the application responds to various authentication results, such as success, validation errors, or backend errors.

### Example: Result Handlers

```kotlin
fun PasswordConfiguration.resultHandlers() {
    onResult = { result ->
        when (result) {
            is PasswordResult.Success -> SPAuthNextAction.NavigateTo(MainContent)
            is PasswordResult.ValidationError -> SPAuthNextAction.FieldMessage(
                field = result.key,
                message = result.message
            )
            is PasswordResult.BackendError -> SPAuthNextAction.FieldMessage(
                field = "server",
                message = "Email or password is incorrect"
            )
        }
    }
}
```

---

## PasswordSPAuthBackend

The `PasswordSPAuthBackend` interface extends **SPAuthenticationBackend** and includes additional methods specific to password-based authentication.

### Inherited Methods from SPAuthenticationBackend

1. **`type: String`**
   Identifies the type of authentication supported by the backend (e.g., password).

   - For password-based authentication, the type is `PasswordCredential.TYPE_PASSWORD_CREDENTIAL`.

2. **`suspend fun authenticate(credential: Credential): SPAuthToken`**
   Authenticates the provided credential and returns an authentication token. This method is used during sign-in.

   - **Parameters**:
     - `credential`: The password credential to authenticate.
   - **Returns**: A valid `SPAuthToken` if authentication succeeds.
   - **Throws**: An exception if authentication fails.

### Additional Methods in PasswordSPAuthBackend

1. **`suspend fun resetPassword(email: String): Boolean`**  
   Initiates a password reset process for the given email address.

2. **`suspend fun confirmPasswordReset(): Boolean`**  
   Confirms the password reset process (e.g., after a user clicks a link in an email).

3. **`suspend fun changePassword(): Boolean`**  
   Changes the user's password.

---

## Example Backend Implementation

Here’s an example of a `PasswordSPAuthBackend` implementation:

```kotlin
import com.lavinou.startpoint.auth.backend.model.SPAuthToken
import com.lavinou.startpoint.auth.password.PasswordSPAuthBackend
import com.lavinou.startpoint.auth.credentials.PasswordCredential

class MyPasswordBackend : PasswordSPAuthBackend {

    override val type: String
        get() = PasswordCredential.TYPE_PASSWORD_CREDENTIAL

    override suspend fun authenticate(credential: Credential): SPAuthToken {
        // Authenticate the password credential and return an SPAuthToken
        return SPAuthToken.Default
    }

    override suspend fun resetPassword(email: String): Boolean {
        // Logic to send a password reset email
        return true
    }

    override suspend fun confirmPasswordReset(): Boolean {
        // Logic to confirm a password reset
        return true
    }

    override suspend fun changePassword(): Boolean {
        // Logic to change the user's password
        return true
    }
}
```

---

## Summary of Key Components

### Validators
- **Purpose**: Ensure inputs meet required conditions.
- **Example Keys**:
  - `USER_KEY`: Email address field.
  - `PASSWORD_KEY`: Password field.
  - `FULL_NAME_KEY`: Full name field.

### Backend Methods
- **Inherited**: `authenticate`
- **Specific**: `resetPassword`, `confirmPasswordReset`, `changePassword`

---
