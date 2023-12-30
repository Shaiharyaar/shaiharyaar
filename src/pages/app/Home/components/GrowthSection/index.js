import { Button, Col, Row, Grid } from "antd";

const { useBreakpoint } = Grid;

const GrowthSection = () => {
  const { md: isMd } = useBreakpoint();

  return (
    <section className="growth-section">
      <div className="growth-learn-more-container container">
        <Row justify={"center"}>
          <Col sm={24} md={10}>
            <h1>{"Join Our Successful Top Sellers."}</h1>
            <p>
              {"*Easy One Click Cancellation * Upgrade or Downgrade Anytime"}
            </p>
          </Col>
          <Col
            sm={24}
            md={10}
            className="growth-section-right"
            style={{ justifyContent: isMd ? "flex-end" : "flex-start" }}
          >
            <Button
              type="primary"
              className="font-bold btn-shadow btn-orange"
              size="large"
            >
              {"Sign Up Now"}
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GrowthSection;
