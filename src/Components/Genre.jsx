import Movie from "./Movie";

function Genre(props) {
  return (
    <>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <Movie title={props.movieTitle1} year={props.year1}/><br/>
        <Movie title={props.movieTitle2} year={props.year2}/>
    </>
  );
}

export default Genre;