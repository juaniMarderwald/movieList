import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";


export function Search() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    }
        
    const query=useQuery();
    const search = query.get("search");
    
    useEffect(() => {
        setSearchText(search || "");
    }, [search]);


    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    type="text"
                    className={styles.searchInput}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit" className={styles.searchButton}>
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
