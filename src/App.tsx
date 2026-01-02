import {createRoot} from 'react-dom/client'
import {Nav} from "./components/Nav/Nav.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const container = document.getElementById("app")
if (!container) throw new Error('Root element with id `app` not found')

createRoot(container).render(
    <Theme >
        <header>
            <Nav/>
        </header>
    </Theme>
)


