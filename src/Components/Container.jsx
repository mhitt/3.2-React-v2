import Genre from "./Genre";
import Card from "./Card";

function Container() {
  return (
    <>
      <h1>Movie App</h1>
      <Card>
        <Genre name={"comedy"} description={"A genre of film that emphasizes humor"} movieTitle1={"Waterboy"} movieTitle2={"Meet the Fockers"} year1={"1998"} year2={"2004"}/>
      </Card>
      <Card>
        <Genre name={"romance"} description={"A genre that focuses on romantic relationships"} movieTitle1={"50 First Dates"} movieTitle2={"What Women Want"} year1={"2004"} year2={"2000"}/>
      </Card>
    </>
  );
}

export default Container;