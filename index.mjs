import * as preact from 'preact'
import * as s from '@preact/signals'
import htm from 'htm'

// preact
export const html = htm.bind(preact.h)
export const render = preact.render
export const Component = preact.Component

// signals
export const signal = s.signal
export const useSignal = s.useSignal
export const useComputed = s.useComputed
