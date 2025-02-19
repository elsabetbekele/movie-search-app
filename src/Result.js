import "./App.css";
function Result({ result, openDetail }) {
  return (
    <div className="result" onClick={(e) => openDetail(result.id)}>
      <h5>{result.title}</h5>
      <img
        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        alt={result.title}
      />
    </div>
  );
}
export default Result;
