import { useQuery } from "@tanstack/react-query";
import type { Film } from "../types/types"

const fetchFilms = async (): Promise<Film[]> => {
    const response = await fetch(`https://ghibliapi.vercel.app/films`);

    if (!response.ok) throw new Error('Erro ao buscar filmes');

    const data = await response.json();

    return data;
}

const organizeFilms = async (): Promise<Film[]> => {
    const films = await fetchFilms();

    const organizedMovies = [...films];

    organizedMovies.sort((a, b) => a.title.localeCompare(b.title));

    return organizedMovies;
}

const sortFilms = async (): Promise<Film[]> => {
    const films = await organizeFilms();
    const orderedFilms = films.slice(0,10)
    return orderedFilms
}

export function useFilms() {
    return useQuery<Film[]>({
        queryKey: ['films'],
        queryFn: () => sortFilms(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
}

const fetchFilm = async (id: string | undefined): Promise<Film> => {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`)

    if (!response.ok) throw new Error('Erro ao buscar filme');

    const data = await response.json();

    return data;
}

export function useFilm(id: string | undefined) {
    return useQuery<Film>({
        queryKey: ['film',id],
        queryFn: () => fetchFilm(id),
        enabled: !!id,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })
}