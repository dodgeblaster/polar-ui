# Polar Components

## What is this lib?

The main objective of this lib is to wrap pinned dependences on preact:

```json
"@preact/signals": "^1.2.1",
"htm": "^3.1.1",
"preact": "^10.17.1"
```

and export stylized reusable components using preact.

## Install

Currently, u just build a dist file, and use that dist file in your frontend project.This is not yet a npm module. It will be once its more stable.

## Usage

This lib exports the following

```js
import {
    // Preact
    render,
    Component,
    html,
    // Preact Signal
    signal,
    useSignal,
    useComputed
} from 'polar-components'
```

## Preact

Go here for docs:
https://preactjs.com/guide/v10/getting-started#alternatives-to-jsx

## Preact Signals

Go here for docs:
https://www.npmjs.com/package/@preact/signals
