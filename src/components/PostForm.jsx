import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions/actionCreators";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitForm = (event) => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) return;

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.submitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={this.changeInputHandler}
          />
          <button className="btn btn-success mt-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
