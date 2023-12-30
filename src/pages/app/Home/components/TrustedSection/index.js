import { Col, Row } from "antd";
import { TRUSTED_IMAGE } from "assets";

const TrustedSection = () => {
  return (
    <section className="trust-section ">
      <div className="trust-section-inner container">
        <Row gutter={[20, 30]}>
          <Col xs={24} sm={8} className="trust-left">
            <img src={TRUSTED_IMAGE} alt="" />
          </Col>
          <Col xs={24} sm={16} className="trust-right">
            <h1>
              Trusted by <mark>1000+ E-Commerce Sellers</mark> spanning the
              globe
            </h1>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TrustedSection;
