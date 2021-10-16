import "./CardLayout.css";

const CardLayout = (props) => {
  return (
    <div className="CardLayout">
      {props.children} <br />
      <br />
    </div>
  );
};

export default CardLayout;
