import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row
        title="Trending Now"
        isLargeRow
        fetchUrl={requests.fetchTrending}
      ></Row>
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
      ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romantic Movies" fetchUrl={requests.fecthRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
