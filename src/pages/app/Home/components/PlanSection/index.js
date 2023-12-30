import { Button, Col, Row, Grid } from "antd";
import { SectionHeading } from "global/components";
import { TICK_ICON, CROSS_ICON } from "assets";
import plans from "./data.json";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const iconMap = {
  tick: TICK_ICON,
  cross: CROSS_ICON,
};

const { useBreakpoint } = Grid;

const PlanSection = ({ onInView }) => {
  const screens = useBreakpoint();
  const containerRef = useRef();
  const isInView = useInView(containerRef , { margin : '0px 0px -300px 0px' });

  const plan = (props) => (
    <PlanCard key={props?.title} {...props} isMd={screens.md} />
  );

  useEffect(() => {
    onInView(isInView, "#pricing-section");
  }, [isInView, onInView]);

  return (
    <section
      className={"plan-section container"}
      id="pricing-section"
      ref={containerRef}
    >
      <div className={"plan-section-wrapper"}>
        <SectionHeading
          heading={"The Right Plan for Your Business"}
          subHeading={
            "We have several powerful plans to showcase your business and get discovered as a creative entrepreneurs. Everything you need."
          }
        />
        <Row
          gutter={[20, 20]}
          justify={{ md: "center" }}
          className={"plans-container"}
        >
          {plans.map(plan)}
        </Row>
      </div>
    </section>
  );
};

const PlanCard = ({
  title,
  features = [],
  amount,
  frequency,
  btnText,
  isPro,
  saveAmount = "",
  isMd,
}) => {
  const feature = (props, index) => <PlanFeature key={index} {...props} />;
  return (
    <Col xs={24} sm={12} md={6} lg={6}>
      <div className={`plan-card ${isPro ? "pro" : ""} ${isMd ? "raise" : ""}`}>
        <div className="plan-card-header">
          <h3 className="plan-title">{title}</h3>
          {isPro && (
            <div className="pro-discount">
              <h5>Save {saveAmount}</h5>
            </div>
          )}
        </div>
        <div className="plan-features-wrapper">{features.map(feature)}</div>
        <div className="amount-wrapper">
          <mark>{amount}</mark>
          <p>/{frequency}</p>
        </div>
        <div className="plan-footer">
          <Button
            block
            className={`custom-btn ${
              isPro ? "plan-btn-pro btn-orange" : "plan-btn"
            } `}
          >
            {btnText}
          </Button>
        </div>
      </div>
    </Col>
  );
};

const PlanFeature = ({ text, isAvailable, iconName }) => (
  <div className={`plan-feature ${!isAvailable ? "unavailable" : ""}`}>
    <div className="plan-feature-icon">
      <span>{iconMap[iconName]}</span>
    </div>
    <div className="plan-feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default PlanSection;
