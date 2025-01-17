import React from "react";
import PropTypes from "prop-types";
import DetailPageAction from "./DetailPageAction";
import { showFormattedDate } from "../utils";

const NoteDetail = ({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  const formattedDate = showFormattedDate(createdAt);

  const handleArchive = () => {
    onArchive(id);
  };

  const handleUnarchive = () => {
    onUnarchive(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{formattedDate}</p>
      <div className="detail-page__body">{body}</div>
      <DetailPageAction
        id={id}
        archived={archived}
        onDelete={handleDelete}
        onArchive={handleArchive}
        onUnarchive={handleUnarchive}
      />
    </section>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteDetail;
