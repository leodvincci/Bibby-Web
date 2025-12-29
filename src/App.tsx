import {createRoot} from 'react-dom/client'

const container = document.getElementById("app")
if (!container) throw new Error('Root element with id `app` not found')

createRoot(container).render(
    <div>
        <h1>Hello Bibby</h1>
    </div>
)


