import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from '@trendyol-js/react-carousel';
import Product from "../components/Product.js";
import Slider from "../components/Slider.js";
import useProducts from "../hooks/useProducts.js";
import "./../assets/css/home.css";
import collection1 from "./../assets/images/collection/1.jpg";
import collection2 from "./../assets/images/collection/2.jpg";
import collection3 from "./../assets/images/collection/3.jpg";
import collection4 from "./../assets/images/collection/4.jpg";
import Bounce from "react-reveal/Bounce";
import Testimonials from "../components/Testimonials.js";
const Home = () => {
  const products = useProducts();
  return (
    <div>
      <Slider />
      <Container className="collections my-5 mx-auto">
        <Bounce bottom cascade>
          <h2 className="text-center feature mb-3">COLLECTION FOR</h2>
        </Bounce>

        <Row className="mx-0">
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img">
              <img className="img-fluid ms-0 ps-0" src={collection1} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection2} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection3} alt="" />
            </div>
          </Col>
          <Col className="my-2 ms-0" xs={12} md={6} lg={3}>
            <div className="img img-fluid">
              <img className="img-fluid ms-0 ps-0" src={collection4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="partners my-5 mx-auto ">
      <Bounce bottom cascade>
          <h2 className="text-center feature ">SHOP BY BRAND</h2>
        </Bounce>
        <Carousel show={4} slide={3} swiping={true}>
          <p  style={{height: "220px", border:"black", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/1.jpg?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/2.jpg?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/3.jpg?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/4.jpg?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/5.png?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/6.png?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/7.png?raw=true")` }}></p>
          <p style={{height: "220px", backgroundPosition:"center", backgroundImage: `url("https://github.com/mdanikislam/apex-shoes-img/blob/main/brand/8.png?raw=true")` }}></p>
          
        </Carousel>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className="text-center feature mb-2">FEATURED PRODUCTS</h2>

        </Bounce>
        {!products.length ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="/products">
            <button className="btn btn-primary mb-5 mt-3">
              Explore all products
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
