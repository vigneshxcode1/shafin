import Card from "react-bootstrap/Card";
import "./Second.css";
import { Link } from "react-router-dom";

function HeaderAndFooterExample() {
  return (
    <>
        <h1>hgd</h1>
    <div className="feature">
      <Card className="text-center">
        <Card.Header className="head">ABOUT OUR BRAND</Card.Header>
        <Card.Body>
          <Card.Text className="text">
          We are good to announce the launch of our new brand, dedicated
            to providing the epitome of elegance at prices that everyone can
            afford. This marks a significant milestone for us, as we strive to
            deliver excellence in both quality and accessibility.Thank you for support
          </Card.Text>
          <Link to={"/products"} className="text-btn">
            BUY NOW
          </Link>
        </Card.Body>
      </Card>
    </div>
    </>

  );
}

export default HeaderAndFooterExample;
