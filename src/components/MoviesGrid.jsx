import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
//import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import {useQuery} from "../hooks/useQuery";


export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");
    console.log(search);


    useEffect(() => {
        setIsLoading(true);
        //Si tengo un search de búsqueda cargo la ruta para buscar peliculas con ese nombre, sino busco con discover/movie
        const searchURL = search
            ? "/search/movie?query=" + search
            : "/discover/movie"
        get(searchURL).then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        })
    }, [search]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>
                <MovieCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}