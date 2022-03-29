const API = "https://api.themoviedb.org/3";

export function get(path){
   return fetch(API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2FlMDRhZDg1MGFlZWNiMzUyM2I3Mjc1MzQ5Y2Y1NyIsInN1YiI6IjYyNDM2NTIwNzZlZWNmMDA4ZTJjNjNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l8InH9GvQQU7RrTwfm_3NTzNiyTEucA_vF9ClPVsMik",
                "Content-Type": "application/json;charset=utf-8"
            },
        }).then((result) => result.json());
}