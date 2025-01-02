---
title: Custom
sidebar_position: 2
---
# Custom Plugin Implementation

In this guide, we'll walk through creating a custom StartPoint plugin, similar to how `SPAuth` is implemented. This example outlines the structure and key methods necessary to integrate a new plugin into the StartPoint framework.

## Overview

A StartPoint plugin consists of:

- **Configuration Class** – Defines the plugin's behavior and routes.
- **Plugin Implementation** – Encapsulates the plugin logic and lifecycle.
- **Installation Process** – Registers the plugin with the StartPoint instance.

## Example: Custom Analytics Plugin

Let's create a simple `AnalyticsPlugin` to track user events.

### Step 1: Define Configuration

```kotlin
@StartPointDsl
class AnalyticsConfiguration internal constructor() {
    var trackingId: String = ""
  
    var logEvents: Boolean = true

    var onEvent: ((String) -> Unit)? = null
}
```

### Step 2: Implement Plugin

```kotlin
class AnalyticsPlugin internal constructor(
    private val config: AnalyticsConfiguration
) {

    val trackingId: String
        get() = config.trackingId

    val logEvents: Boolean
        get() = config.logEvents

    internal val attributes: Attributes = Attributes(concurrent = true)

    fun trackEvent(event: String) {
        if (logEvents) {
            Log.d("AnalyticsPlugin","Tracking event: $event with ID ${config.trackingId}")
        }
        config.onEvent?.invoke(event)
    }

    companion object Plugin : StartPointPlugin<AnalyticsConfiguration, AnalyticsPlugin> {

        private var current: AnalyticsPlugin? = null

        override val key: AttributeKey<AnalyticsPlugin>
            get() = AttributeKey("StartPointAnalytics")

        override val graph: NavGraphBuilder.(NavHostController) -> Unit
            get() = { navController ->
                // no-opt
            }

        override fun install(plugin: AnalyticsPlugin, scope: StartPoint) {
            current = plugin
        }

        override fun prepare(block: AnalyticsConfiguration.() -> Unit, scope: StartPoint): AnalyticsPlugin {
            return AnalyticsConfiguration().apply(block).let {
                AnalyticsPlugin(it)
            }
        }
    }
}
```

### Step 3: Install Plugin

```kotlin
val startPoint = rememberStartPoint {
    install(AnalyticsPlugin) {
        trackingId = "UA-12345678"
        logEvents = true
        onEvent = { event ->
            Log.d("Analytics", "Custom event triggered: $event")
        }
    }
}
```

### Step 4: Use the Plugin

Once installed, the plugin can be accessed and used to track events as follows:

```kotlin
startPoint.pluginOrNull(AnalyticsPlugin)?.trackEvent("UserLoggedIn")
startPoint.pluginOrNull(AnalyticsPlugin)?.trackEvent("ButtonClicked")
```

## Key Points

- **Encapsulation:** All plugin logic is contained within a single class.
- **Configuration:** Plugins use a configuration object to manage runtime settings.
- **Lifecycle:** The `install` and `prepare` methods ensure the plugin is properly initialized and added to StartPoint.
- **Usage:** Plugins are easily accessible through the StartPoint instance, enabling interaction after installation.

By following this structure, you can create custom plugins to extend the functionality of your StartPoint applications, just like `SPAuth` or `AnalyticsPlugin` in this example.

