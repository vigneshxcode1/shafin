import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import animitees from "../../src/componets/images/animitees.jpg";
import animioversizes from "../../src/componets/images/firstbanner.jpg";
import Navbar from "../componets/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import '../componets/Product/Product.css'

function GroupExample() {
  return (
    <>
     <Navbar/>
     <br></br>
     <br></br>
    <CardGroup className="main-box">
      <Card.Body className="box">
        <Link to={"/trending"}>
          {" "}
          <Card.Img className="hoverimg" variant="top" src={animitees} />
          <h1 className="title">TRENDING TEES</h1>
        </Link>

      </Card.Body>

      <Card.Body className="box">

        <Link to={"/trendoversized"}>
          {" "}
          <Card.Img variant="top" src={animioversizes} />
          <h1 className="title">TRENDING OVERSIZE TEES</h1>
        </Link>
    
     
      </Card.Body>
    </CardGroup>
    </>
   
  );
}

export default GroupExample;
