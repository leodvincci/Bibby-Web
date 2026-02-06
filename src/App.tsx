import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddBookcasePage } from "./components/LibraryManagement/AddBookcasePage.tsx";
import { AddBookPage } from "./components/LibraryManagement/AddBookPage.tsx";
import { BookPage } from "./components/LibraryManagement/BookPage.tsx";
import { ViewBookcasesPage } from "./components/LibraryManagement/ViewBookcasesPage.tsx";
import { ViewBookshelvesPage } from "./components/LibraryManagement/ViewBookshelvesPage.tsx";
import { ViewShelfPage } from "./components/LibraryManagement/ViewShelfPage.tsx";
import { LoginPage } from "./components/Login/LoginPage.tsx";
import { RegistrationPage } from "./components/Registration/RegistrationPage.tsx";
import { SearchPage } from "./components/Search/SearchPage.tsx";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";

const container = document.getElementById("app");
if (!container) throw new Error("Root element with id `app` not found");

createRoot(container).render(
	<Theme>
		<AuthProvider>
			<BrowserRouter>
				<header></header>
				<Routes>

					<Route element={<ProtectedRoute />}>
						<Route path="/search" element={<SearchPage />} />
						<Route path="/books/new" element={<AddBookPage />} />
						<Route path="/bookcases/new" element={<AddBookcasePage />} />
						<Route path="/bookcases/view" element={<ViewBookcasesPage />} />
						<Route
							path="/bookshelves/view/shelf/:shelfId"
							element={<ViewShelfPage />}
						/>
						<Route
							path="/bookshelves/view/:bookcaseId"
							element={<ViewBookshelvesPage />}
						/>
						<Route path="/books/view/:isbn" element={<BookPage />} />
					</Route>

					<Route path="/" element={<LoginPage />} />
					<Route path="/signup" element={<RegistrationPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter> 
		</AuthProvider>
	</Theme>,
);
