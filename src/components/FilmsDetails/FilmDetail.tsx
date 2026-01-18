import { Link, useParams } from "react-router-dom";
import { useFilm } from "../../hooks/fetchfilms";

const FilmDetail = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useFilm(id)

    return (
        <>
            {isLoading &&
                <div className="w-screen h-screen flex items-center justify-center">
                    <p>Carregando informações do filme...</p>
                </div>}
            {error &&
                <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
                    <p>Erro ao buscar informações do filme. Clique no botão abaixo para tentar novamente.</p>
                    <div className="bg-neutral-600 text-white rounded-lg h-10 p-1 flex items-center hover:bg-neutral-700 transition">
                        <Link to="/">Tentar novamente</Link>
                    </div>
                </div>}
            {data &&
                <div className="p-2 min-h-screen flex items-center justify-center bg-neutral-100 px-4">
                    <div className="flex flex-col w-full max-w-xl items-center bg-neutral-600 rounded-lg gap-4 p-4">
                        <img className="h-40" src={data.image} alt={data.title} />
                        <p className="text-center"><span className="text-white">Nome do Filme:</span> {data.title}</p>
                        <p className="w-full text-center px-2"><span className="text-white">Descrição:</span> {data.description}</p>
                        <p><span className="text-white">Diretor:</span> {data.director}</p>
                        <p><span className="text-white">Produtor:</span> {data.producer}</p>
                        <p><span className="text-white">Ano de lançamento:</span> {data.release_date}</p>
                        <p><span className="text-white">Pontuação Rotten Tomatoes:</span> {data.rt_score}</p>
                        <Link className="hover:text-white transition" to="/">Voltar</Link>
                    </div>
                </div>
            }
        </>
    )
}

export { FilmDetail }