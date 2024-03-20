import "./button.css";
// import Button from 'react-bootstrap/Button';

export const Button = ({ children, ...props }) => {
  return (
    <button className="btn">
      {children}
    </button>
  );
};
