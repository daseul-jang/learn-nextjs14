import { API_URL } from '../app/(home)/page';

const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <h3>{movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
