import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submitForm = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input type="password" className="form-control" id="title" />
          <button className="btn btn-success mt-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
