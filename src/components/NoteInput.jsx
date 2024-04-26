import React, { Component } from "react";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleBodyChange(event) {
    const { innerHTML } = event.target;
    this.setState({ body: innerHTML });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <section className="add-new-page__input">
        <form onSubmit={this.handleSubmit}>
          <label>
            Judul:
            <input
              className="add-new-page__input__title"
              type="text"
              placeholder="Title"
              required
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label>
            Catatan:
            <div
              className="add-new-page__input__body"
              contentEditable="true"
              data-placeholder="Tulis catatanmu..."
              onInput={this.handleBodyChange}
            />
          </label>
          <div className="add-new-page__action">
            <button className="action" type="submit" title="Save">
              <FiCheck />
            </button>
          </div>
        </form>
      </section>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
