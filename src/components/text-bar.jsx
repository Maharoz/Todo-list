import React, { Component } from "react";

class Textbar extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder=""
        />
        <div className="addButton">
          <button className="btn btn-submit ">Add</button>
        </div>
      </form>
    );
  }
}

export default Textbar;
