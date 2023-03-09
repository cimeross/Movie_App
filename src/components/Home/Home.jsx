import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from "../../features/movies/movieSlice";
import "./Home.scss";

const Home = () => {
	const dispatch = useDispatch();
	//const data = useSelector(getSelectedMovieOrShow);
	const movieText = "Lord";
	const showText = "Game";
	const { movies, shows, isLoading } = useSelector((state) => state.movies);

	useEffect(() => {
		dispatch(fetchAsyncMovies(movieText));
		dispatch(fetchAsyncShows(showText));
	}, [dispatch]);
	return (
		<div>
			<div className="banner-img"></div>
			{isLoading ? (
				<div className="loading-text">...loading</div>
			) : (
				<MovieListing movies={movies} shows={shows} />
			)}
		</div>
	);
};

export default Home;
