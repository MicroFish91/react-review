import "./CardLayout.css";

const CardLayout = (props) => {
  return (
    <div className="CardLayout">
      {props.children} <br />
    </div>
  );
};

export default CardLayout;
