import {
    html,
    render,
    signal,
    useSignal,
    useComputed
} from './polar-components.js'

const s = signal({
    id: 'user-12345'
})

function App(props) {
    const count = useSignal(0)
    const double = useComputed(() => count.value * 2)
    return html`<h1>Hello ${props.name} ${s.value.id}!</h1>
        <button onClick=${() => count.value++}>
            Value: ${count.value}, value x 2 = ${double.value}
        </button>`
}

render(html`<${App} name="World" />`, document.body)
