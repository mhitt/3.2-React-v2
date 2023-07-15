import Genre from "./Genre";
import Card from "./Card";

function Container() {
  return (
    <>
      <h1>Movie App</h1>
      <Card>
        <Genre name={"comedy"} description={"A genre of film that emphasizes humor"} movieTitle1={{"title":"Waterboy","year":1998}} movieTitle2={{"title":"Meet the Fockers","year":2004}} />
      </Card>
      <hr />
      <Card>
        <Genre name={"romance"} description={"A genre that focuses on romantic relationships"} movieTitle1={{"title":"Titanic","year":1997}} movieTitle2={{"title":"What Women Want","year":2000}} />
      </Card>
    </>
  );
}

export default Container;