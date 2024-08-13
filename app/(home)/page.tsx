import Link from 'next/link';
import { resolve } from 'path';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};

const getMovies = async () => {
  return fetch(API_URL).then((res) => res.json());
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
