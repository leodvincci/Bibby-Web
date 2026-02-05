import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddBookcasePage } from "./components/LibraryManagement/AddBookcasePage.tsx";
import { AddBookPage } from "./components/LibraryManagement/AddBookPage.tsx";
import { ViewBookcasesPage } from "./components/LibraryManagement/ViewBookcasesPage.tsx";
import { ViewBookshelvesPage } from "./components/LibraryManagement/ViewBookshelvesPage.tsx";
import { LoginPage } from "./components/Login/LoginPage.tsx";
import { RegistrationPage } from "./components/Registration/RegistrationPage.tsx";
import { SearchPage } from "./components/Search/SearchPage.tsx";
import { ViewShelfPage } from "./components/LibraryManagement/ViewShelfPage.tsx";

const container = document.getElementById("app");
if (!container) throw new Error("Root element with id `app` not found");

createRoot(container).render(
	<Theme>
		<BrowserRouter>
			<header></header>
			<Routes>
				<Route path="/search" element={<SearchPage />} />
				<Route path="/signup" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/books/new" element={<AddBookPage />} />
				<Route path="/bookcases/new" element={<AddBookcasePage />} />
				<Route path="/bookcases/view" element={<ViewBookcasesPage />} />
				<Route path="/bookshelves/view/shelf/:shelfId" element={<ViewShelfPage />} />
				<Route
					path="/bookshelves/view/:bookcaseId"
					element={<ViewBookshelvesPage />}
				/>
			</Routes>
		</BrowserRouter>
	</Theme>,
);
