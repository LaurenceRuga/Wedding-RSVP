import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </Tag>
  );
};

export default FadeInSection;
