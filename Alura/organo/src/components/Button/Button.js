import "./button.css";

export const Button = ({ children, ...props }) => {
  return <button className="btn">{children}</button>;
};
