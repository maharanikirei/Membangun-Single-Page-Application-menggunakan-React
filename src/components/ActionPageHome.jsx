import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ActionPageHome = () => {
  const handleButtonClick = () => {};

  return (
    <div className="PageHome__action">
      <Link to="/notes/new">
        <ActionButton
          className="action"
          type="button"
          title="New"
          onClick={handleButtonClick}
        >
          <FiPlus />
        </ActionButton>
      </Link>
    </div>
  );
};

const ActionButton = ({ className, type, title, onClick, children }) => (
  <button className={className} type={type} title={title} onClick={onClick}>
    {children}
  </button>
);

export default ActionPageHome;
