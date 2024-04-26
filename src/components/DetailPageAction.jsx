import React from "react";
import PropTypes from "prop-types";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";

const DetailPageAction = ({
  id,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  const handleArchiveClick = () => {
    onArchive(id);
  };

  const handleUnarchiveClick = () => {
    onUnarchive(id);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="detail-page__action">
      {archived ? (
        <ActionButton
          icon={<MdOutlineUnarchive />}
          title="Aktifkan"
          onClick={handleUnarchiveClick}
        />
      ) : (
        <ActionButton
          icon={<MdOutlineArchive />}
          title="Arsipkan"
          onClick={handleArchiveClick}
        />
      )}
      <ActionButton
        icon={<BiTrashAlt />}
        title="Delete"
        onClick={handleDeleteClick}
      />
    </div>
  );
};

const ActionButton = ({ icon, title, onClick }) => (
  <button className="action" type="button" title={title} onClick={onClick}>
    {icon}
  </button>
);

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default DetailPageAction;
