---
sidebar_position: 1
title: StartPoint
---

# Welcome to StartPoint Documentation

StartPoint is a composable and extensible framework designed to simplify application development by providing a structured way to manage navigation, configuration, and plugin integration. The core module acts as the foundation for building scalable and customizable applications.

## What is StartPoint?

StartPoint enables developers to create modular and extensible applications using a plugin-based architecture. It leverages Jetpack Compose and provides:

- **Simplified Navigation**: Manage app navigation with `NavHostController`.
- **Plugin System**: Extend application features dynamically.
- **Configuration Management**: Easily configure and install components with DSL blocks.

## Why Use StartPoint?
- **Composable Architecture**: Fully integrates with Jetpack Compose.
- **Extensibility**: Build custom plugins to extend app functionality.
- **Ease of Use**: Provides a clean API for managing app state and navigation.

## Installation

To get started with StartPoint, follow the [installation guide](./startpoint-getting-started/installation-guide.md).

## Quick Example

```kotlin
val startPoint = rememberStartPoint {
    // Configure StartPoint plugins or attributes here
}

StartPointScaffold(startPoint = startPoint) {
    // Main application content goes here
}
```

## Next Steps
- [Setup and Installation](./startpoint-getting-started/installation-guide.md)
- [Plugin System](./plugin_system)
- [Navigation](./navigation)
- [API Reference](./api_reference)

Explore the full documentation to dive deeper into StartPoint's capabilities.


