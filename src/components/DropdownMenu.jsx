import { useState } from "react";

const DropdownMenu = ({ title, items, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  const handleClick = (item) => {};

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >

        <div className="dd-header_title">
            <p className="dd-header_title--bold">{title}</p>
        </div> 
      </div>
    </div>
  );
};

export default DropdownMenu;
