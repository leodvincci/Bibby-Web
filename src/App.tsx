import {createRoot} from 'react-dom/client'
import {Nav} from "./components/Nav.tsx";

const container = document.getElementById("app")
if (!container) throw new Error('Root element with id `app` not found')

createRoot(container).render(
    <div>
        <header>
            <Nav/>
        </header>
    </div>
)


