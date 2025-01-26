---
id: biometric-provider
title: Biometric
description: Documentation for configuring the Biometric Provider in SPAuth.
sidebar_position: 2
---

# Biometric 

## Overview

The **Biometric Provider** in **SPAuth** offers secure authentication using biometric credentials like fingerprints or facial recognition. It integrates with a server-side backend via the **BiometricSPAuthBackend**, which extends the general **SPAuthenticationBackend** interface.

This guide details how to configure, implement, and use the Biometric Provider for biometric authentication.

## Installation

To begin, add the Biometric dependency to your project:

```kotlin
implementation("com.github.lavinou.startpoint-android:auth-biometric")
```

---

## Configuration

The `BiometricConfiguration` class is used to configure the Biometric Provider. It allows you to define the backend, customize the user interface, and handle authentication results.

### Configuration Properties

- **`backend`**: An implementation of `BiometricSPAuthBackend`, responsible for server-side registration, authentication, and unregistration of biometric credentials.
- **`image`**: An optional image displayed during the biometric registration process.
- **`onResult`**: A callback to handle various outcomes of biometric authentication, such as success, cancellation, or failure.

---

## Example: Setting Up the Biometric Provider

Here's a typical setup for the Biometric Provider within **SPAuth**:

```kotlin
install(SPAuth) {

    title = "Secure Login"

    signInButtonRoute = BiometricSignIn
    signUpButtonRoute = PasswordSignUp

    exitOnUserCancel = false

    setUserSessionBackend(userSessionBackend)

    addProvider(Biometric) {

        backend = biometricBackend

        image = R.drawable.baseline_fingerprint_24

        onResult = { result ->
            when (result) {
                is BiometricResult.Success -> SPAuthNextAction.NavigateTo(MainContent)
                is BiometricResult.RegistrationSuccess -> SPAuthNextAction.NavigateTo(MainContent)
                is BiometricResult.OnUserCancelled -> SPAuthNextAction.NavigateTo(
                    route = PasswordSignIn,
                    keepBackStack = false
                )
                is BiometricResult.BiometricNotRegistered -> SPAuthNextAction.NavigateTo(PasswordSignIn)
                is BiometricResult.Failure -> SPAuthNextAction.DisplayMessage(
                    "Something Went Wrong",
                    "Unable to authenticate successfully"
                )
            }
        }
    }
}
```

---

## BiometricSPAuthBackend

The `BiometricSPAuthBackend` interface extends **SPAuthenticationBackend** and includes additional methods specific to biometric authentication.

### Inherited Methods from SPAuthenticationBackend

1. **`type: String`**  
   Identifies the type of authentication supported by the backend (e.g., biometric).

   - For biometric authentication, the type is `BiometricCredential.TYPE`.

2. **`suspend fun authenticate(credential: Credential): SPAuthToken`**  
   Authenticates the provided credential and returns an authentication token. This method is used during biometric login.

   - **Parameters**:
     - `credential`: The biometric credential to authenticate.
   - **Returns**: A valid `SPAuthToken` if authentication succeeds.
   - **Throws**: An exception if authentication fails.

### Additional Methods in BiometricSPAuthBackend

1. **`suspend fun register(id: BiometricIdentifier): Boolean`**  
   Registers a user's biometric credentials with the backend.

2. **`suspend fun unregister(id: BiometricIdentifier): Boolean`**  
   Unregisters a user's biometric credentials from the backend.

3. **`suspend fun challenge(id: BiometricIdentifier): String`**  
   Generates a challenge for biometric authentication.

---

## Authentication Results

The `onResult` callback in the `BiometricConfiguration` class handles the following outcomes:

- **`BiometricResult.Success`**: Indicates successful authentication with a valid `SPAuthToken`.
- **`BiometricResult.RegistrationSuccess`**: Indicates successful biometric registration.
- **`BiometricResult.OnUserCancelled`**: Indicates that the user canceled the biometric prompt.
- **`BiometricResult.BiometricNotRegistered`**: Indicates no biometric credentials are registered on the device.
- **`BiometricResult.Failure`**: Indicates an error occurred during authentication.

---

## Example Backend Implementation

Here’s an example of a `BiometricSPAuthBackend` implementation:

```kotlin
import com.lavinou.startpoint.auth.backend.model.SPAuthToken
import com.lavinou.startpoint.auth.biometric.BiometricIdentifier
import com.lavinou.startpoint.auth.biometric.BiometricSPAuthBackend
import com.lavinou.startpoint.auth.biometric.credentials.BiometricCredential

class MyBiometricBackend : BiometricSPAuthBackend {

    override val type: String
        get() = BiometricCredential.TYPE

    override suspend fun authenticate(credential: Credential): SPAuthToken {
        // Authenticate the biometric credential and return an SPAuthToken
        return SPAuthToken.Default
    }

    override suspend fun register(id: BiometricIdentifier): Boolean {
        // Register biometric credentials with the backend
        return true
    }

    override suspend fun unregister(id: BiometricIdentifier): Boolean {
        // Unregister biometric credentials from the backend
        return true
    }

    override suspend fun challenge(id: BiometricIdentifier): String {
        // Generate a challenge for biometric authentication
        return "challenge-token"
    }
}
```

---

## Summary of Key Components

### Configuration Properties
- `backend`: Connects the Biometric Provider to the server-side authentication logic.
- `image`: Customizable image for biometric UI.
- `onResult`: Callback to handle authentication results.

### Backend Methods
- **Inherited**: `authenticate`
- **Specific**: `register`, `unregister`, `challenge`

---
