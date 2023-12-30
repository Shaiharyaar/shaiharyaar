import { UserOutlined } from "@ant-design/icons";
import { Avatar, Rate } from "antd";
import { SectionHeading } from "global/components";
import testimonials from "./data.json";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section container">
      <SectionHeading
        heading={"Client Testimonials"}
        subHeading={"Check out what our clients think about us"}
      />
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

const Testimonial = ({ imgSrc, name, designation, rating, text }) => (
  <div className="testimonial">
    <Avatar size={80} icon={<UserOutlined />} />
    <div className="client-info-wrapper">
      <h4>{name}</h4>
      <p>{designation}</p>
    </div>
    <Rate value={rating} />
    <p className="testimonial-text">{text}</p>
  </div>
);

export default TestimonialsSection;
