// import React from 'react'
// import "./AboutUs.css";
// const AboutUs = () => {
//   return (
//         <div class="rectangle-div">
//     <img class="rectangle-icon" alt="" src="./images/images (1).jpeg" />

//     <img class="desktop-1-child1" alt="" src="./images/images (2).jpeg" />

//     <img class="desktop-1-child2" alt="" src="./images/images (3).jpeg" />

//     <img class="desktop-1-child3" alt="" src="./images/images (4).jpeg" />
//          <div class="about-us">About us</div>
//     <div class="welcome-to-nmamit-container">
//       <p class="welcome-to-nmamit">
//         Welcome to NMAMIT DURGA Canteen, your one-stop shop for delicious and
//         affordable meals and snacks on campus. We are committed to providing
//         our students,faculty,and staff with a wide variety of high quality
//         food options that are both nutritios and satisfying .
//       </p>
//       <p class="welcome-to-nmamit">&nbsp;</p>
//       <p class="welcome-to-nmamit">
//         Our team of passionate chefs takes pride in preparing fresh,
//         high-quality meals using locally sourced ingredients whenever
//         possible. We believe that healthy eating is an essential part of a
//         successful college experience, and we strive to offer a wide range of
//         options to suit every palate and preference
//       </p>
//       <p class="welcome-to-nmamit">&nbsp;</p>
//       <p class="welcome-to-nmamit">
//         We understand that college students have busy schedules and tight
//         budgets, which is why we offer affordable pricing on all our menu
//         items. We believe that everyone should have access to healthy,
//         nutritious meals, and we're committed to making our canteen a place
//         where everyone feels welcome and valued.
//       </p>
//       <p class="welcome-to-nmamit">&nbsp;</p>
//       <p class="welcome-to-nmamit">
//         we're more than just a place to grab a bite to eat. We're a hub for
//         the college community, a place where students can come together to
//         socialize, recharge, and refuel for the challenges that lie ahead.
//         We're proud to be a part of your college experience, and we're
//         committed to providing you with the best possible dining experience
//         every time you visit
//       </p>
//     </div>
//     </div>
//   )
// }

// export default AboutUs

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div style={{"marginTop" : "10%"}}>
    <Container>
      <Row>
        <Col md={6}>
          <Image src="images/images (1).jpeg" alt="NMAMIT DURGA Canteen" fluid />
        </Col>
        <Col md={6}>
          <div className="about-us">About us</div>
          <p className="welcome-to-nmamit">
            Welcome to NMAMIT DURGA Canteen, your one-stop shop for delicious and affordable meals and snacks on campus. We are committed to providing our students, faculty, and staff with a wide variety of high-quality food options that are both nutritious and satisfying.
          </p>
          <p className="welcome-to-nmamit">
            Our team of passionate chefs takes pride in preparing fresh, high-quality meals using locally sourced ingredients whenever possible. We believe that healthy eating is an essential part of a successful college experience, and we strive to offer a wide range of options to suit every palate and preference.
          </p>
          <p className="welcome-to-nmamit">
            We understand that college students have busy schedules and tight budgets, which is why we offer affordable pricing on all our menu items. We believe that everyone should have access to healthy, nutritious meals, and we're committed to making our canteen a place where everyone feels welcome and valued.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Image src="images/images (2).jpeg" alt="NMAMIT DURGA Canteen" fluid />
        </Col>
        <Col md={4}>
          <Image src="images/images (3).jpeg" alt="NMAMIT DURGA Canteen" fluid />
        </Col>
        <Col md={4}>
          <Image src="images/images (4).jpeg" alt="NMAMIT DURGA Canteen" fluid />
        </Col>
      </Row>
    </Container></div>
  );
};

export default AboutUs;
