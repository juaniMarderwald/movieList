import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css"
import { MovieDetails } from "./pages/MoviesDetails";
import { LandingPage } from "./pages/LandingPage";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";


export function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/"> <h1 className={styles.title}>Movies</h1> </Link>                
            </header>

            <main>
                <Routes>
                    <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

