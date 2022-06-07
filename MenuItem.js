import Button from "../../Button";
import './Menu.css'

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={"menu-item"}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
