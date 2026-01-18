import { Link } from "react-router-dom";
import { useFilms } from "../../hooks/fetchfilms";

const RenderFilms = () => {
    const { data, isLoading, error } = useFilms()

    return (
        <>
            {isLoading &&
                <div className="h-screen w-screen flex items-center justify-center">
                    <p>Carregando filmes...</p>
                </div>}
            {error &&
                <div className="h-screen w-screen flex flex-col items-center justify-center gap-5">
                    <p>Erro ao buscar os filmes. Clique no botão abaixo para tentar novamente.</p>
                    <div className="bg-neutral-600 text-white rounded-lg h-10 p-1 flex items-center hover:bg-neutral-700 transition">
                        <Link to="/">Tentar novamente</Link>
                    </div>
                </div>}
            <div className="flex flex-wrap justify-center gap-25 bg-neutral-100 p-2">
                {data &&
                    data.map(movie => (
                        <div key={movie.id}>
                            <p className="text-center">{movie.title}</p>
                            <div className="relative group">
                                <img className="h-150 object-cover rounded-lg" src={movie.image} alt={movie.title} />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                    <Link key={movie.id} to={`/films/${movie.id}`} className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition">Saiba mais</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export { RenderFilms }