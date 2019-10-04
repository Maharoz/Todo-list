import React, { Component } from "react";

class Textbar extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      isDataEmpty: false
    };
  }

  formOnSubmit=(e)=> {
    e.preventDefault();
    const { data } = this.state;
    !data ? this.setState({ isDataEmpty: true }) : this.props.handleSubmitData(data);
    this.setState({ data: '' });
  }
  render() {
    const { data, isDataEmpty } = this.state;
    return (
     
      <form onSubmit={this.formOnSubmit} className="search-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            style={isDataEmpty?{borderColor: 'Red',borderRadius: '8px' }:null}
            aria-describedby="basic-addon2"
            value={data}
            onChange={({ target: { value } }) =>
              this.setState({ data: value, isDataEmpty: false })
            }
            placeholder={
              isDataEmpty
                ? "Please enter something..."
                : "Write something..."
            }
          />
          <div className="input-group-append">
            <button className="input-group-text hover-cursor" id="basic-addon2">
              <i className="fa fa-plus-circle fa-2x"></i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Textbar;
