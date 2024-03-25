import "./Button.css";

export function Button({ text, onClick }, ...props) {
  return <button className="btn">{text}</button>;
}
