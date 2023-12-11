import "./title.css";

export default function Title({ children, name }) {
  return (
    <div className="title">
      {children}
      <span>{name}</span>
    </div>
  );
}

// obs.: children vai exibir o que está no componente Title
