import {createRoot} from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './components/Registration/RegistrationPage.tsx';
import { SearchPage } from './components/Search/SearchPage.tsx';
import { LoginPage } from './components/Login/LoginPage.tsx';
import { AddBookPage } from './components/LibraryManagement/AddBookPage.tsx';

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
                <Route path="/addNewBook" element={<AddBookPage/>} />

            </Routes>
        </BrowserRouter>
    </Theme>
)


