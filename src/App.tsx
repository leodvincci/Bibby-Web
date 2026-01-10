import {createRoot} from 'react-dom/client'
import {Nav} from "./components/Nav/Nav.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import { RegistrationPage } from './components/Registration/RegistrationPage.tsx';
import { SearchPage } from './components/Search/SearchPage.tsx';
import { LoginPage } from './components/Login/LoginPage.tsx';

const container = document.getElementById("app")
if (!container) throw new Error('Root element with id `app` not found')

createRoot(container).render(
    <Theme >
        <BrowserRouter>
            <header>
            
            </header>
            <Routes>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/signup" element={<RegistrationPage/>} />
                <Route path="/login" element={<LoginPage/>} />

            </Routes>
        </BrowserRouter>
    </Theme>
)


