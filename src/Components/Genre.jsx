import Movie from "./Movie";

function Genre(props) {
  return (
    <>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <Movie title={props.movieTitle1.title} year={props.movieTitle1.year}/><br/>
        <Movie title={props.movieTitle2.title} year={props.movieTitle2.year}/>
    </>
  );
}

export default Genre;