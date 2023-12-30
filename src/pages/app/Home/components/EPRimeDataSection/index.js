import { Collapse } from "antd";
import React, { useEffect, useRef } from "react";
import ePrimeData from "./data.json";
import { useInView } from "framer-motion";

const EPrimeDataSection = ({ onInView }) => {
  const containerRef = useRef();
  const isInView = useInView(containerRef);

  useEffect(() => {
    onInView(isInView, "#faqs-section");
  }, [isInView, onInView]);

  return (
    <section
      className={"e-prime-data-section container"}
      id="faqs-section"
      ref={containerRef}
    >
      <div className={"e-prime-data-wrapper"}>
        <h1>{"Why EPrimeData?"}</h1>
        <p>
          {
            "Joining DataHawk means access to all your Amazon and Walmart business needs. Our reliable customer success, sales, product, and data teams are committed to bettering your Amazon and Walmart businesses."
          }
        </p>
        <EPrimeDataCollapsible />
      </div>
    </section>
  );
};

const EPrimeDataCollapsible = () => {
  const { Panel } = Collapse;
  const panel = (val, index) => {
    const { title, text } = val;
    return (
      <Panel key={index} header={title} className={"header-text"}>
        <p>{text}</p>
      </Panel>
    );
  };
  return (
    <Collapse
      accordion={true}
      expandIcon={ExpandIcon}
      className={"e-prime-collapse"}
      bordered={false}
    >
      {ePrimeData.map(panel)}
    </Collapse>
  );
};

const ExpandIcon = ({ isActive }) => {
  return (
    <div
      className={`expand-icon relative df-row-centered ${
        isActive ? "expand-icon-active" : ""
      }`}
    >
      <span className={"abs-centered"}>{isActive ? "-" : "+"}</span>
    </div>
  );
};

export default EPrimeDataSection;
