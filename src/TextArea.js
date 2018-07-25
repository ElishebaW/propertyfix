import React, { Component } from 'react';


class TextArea extends Component {
  render() {
    return (
      <textarea rows="4" cols="50" name="comment" form="usrform">
          Enter request her...</textarea>
      <form>
        <input type="text" className="name" id="name"
        />
        <input type="text" className="email" id="email"
        />
      </form>
      <input type="submit" />
    )
  }

}
