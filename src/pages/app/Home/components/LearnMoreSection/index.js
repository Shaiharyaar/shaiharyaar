import { Button, Col, Row } from "antd";
import { LEARN_MORE_IMAGE } from "assets";

const LearnMoreSection = () => {
  return (
    <section className="learn-more-section">
      <div className="container">
        <Row>
          <Col xs={24} md={12} className="learn-more-left">
            <div>
              <h2>EPrime Data</h2>
              <h1>
                Save time and build profits by automating your Etsy Listings
              </h1>
              <p className="text-18">
                The only Analytical tool etsy sellers need to succeed
              </p>
              <Button
                type="primary"
                className="custom-btn btn-shadow btn-orange"
                onClick={() =>
                  document.getElementById("my-projects").scrollIntoView()
                }
              >
                Learn More
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12} className="learn-more-image-wrapper">
            <img src={LEARN_MORE_IMAGE} alt="" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LearnMoreSection;
