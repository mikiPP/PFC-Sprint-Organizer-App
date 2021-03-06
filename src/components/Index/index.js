import React from 'react';
import clases from './index.module.css';
import logo from '../../assets/logo.svg';
import reunion from '../../assets/reunion.png';
import working from '../../assets/working.jpg';
import dashboard from '../../assets/dashboard.jpg';
import productividad from '../../assets/productividad.png';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom';
import classes from './index.module.css';

const index = (props) => (
  <Container className={clases.container}>
    <Navbar fixed="top" className={clases.navbar}>
      <Col className={clases.logoContainer}>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <h1>Sprint Organizer</h1>
      </Col>
      <Col>
        <div className={clases.authContainer}>
          <NavLink to="/auth" exact>
            <h1 data-text="SignUp" className={classes.navbarText}>
              SignUp
            </h1>
          </NavLink>
          <NavLink to={{ pathname: '/auth', hash: '#active' }} exact>
            <h1 data-text="Login" className={classes.navbarText}>
              Login
            </h1>
          </NavLink>
        </div>
      </Col>
    </Navbar>
    <section className={clases.first}>
      <Row className={classes.firstContainer}>
        <Col>
          <img
            alt="reunion"
            className={[clases.imgPlusText, classes.firstImg].join(' ')}
            src={reunion}
          />
        </Col>
        <Col>
          <div className={clases.textContainer}>
            <h1>Sprint Organizer</h1>
            <p>Our goal is to make easier to manage all the projects for you</p>
          </div>
        </Col>
      </Row>
    </section>
    <section className={clases.second}>
      <Row>
        <Col>
          <div className={clases.textContainer}>
            <h1>Be productive</h1>
            <p> Focus in what to do instead of the management</p>
          </div>
        </Col>
        <Col className={clases.imgContainer}>
          <img alt="reunion" className={clases.imgPlusText} src={working} />
        </Col>
      </Row>
    </section>
    <section className={clases.third}>
      <Row>
        <Col className={clases.imgContainer}>
          <img
            alt="reunion"
            className={clases.imgPlusText}
            src={productividad}
          />
        </Col>
        <Col>
          <div className={clases.textContainer}>
            <h1>Sprint Organizer</h1>
            <p>
              manage the tasks,projects and sprints just dragging and dropping
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section className={clases.forth}>
      <Row>
        <Col>
          <div className={clases.textContainer}>
            <h1>Sprint Organizer</h1>
            <p> take the control of all that is happening in your projects</p>
          </div>
        </Col>
        <Col className={clases.imgContainer}>
          <img alt="reunion" className={clases.imgPlusText} src={dashboard} />
        </Col>
      </Row>
    </section>
    <section className={clases.footer}>
      <Row className={clases.footerRow}>
        <Col>
          <ul>
            <li>
              <a href="https://es-es.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/home/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/mikiPP">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-palao-palmer-a61486177/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className={clases.footerRow}>
        <Col>Miki Palao Palmer 2020 ©</Col>
      </Row>
    </section>
  </Container>
);

export default index;
