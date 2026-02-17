import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddBookcasePage, ViewBookcasesPage } from "./pages/bookcase";
import { AddBookPage, BookPage } from "./pages/book";
import { ViewBookshelvesPage, ViewShelfPage } from "./pages/bookshelf";
import { LoginPage, RegistrationPage } from "./pages/auth";
import { SearchPage } from "./pages/search";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./routing";

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
