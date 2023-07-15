import '../CSS/Card.css'

function Card({ children }) {
    return (
      <div className="card">
        <h3></h3>
        {/* <hr /> */}
        {children}
      </div>
    );
  }
  export default Card;