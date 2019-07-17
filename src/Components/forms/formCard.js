import React from 'react';

class FormCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content
    };
  }

  render() {
    return (
      <div className="grid-x">
        <div className="cell">
          <h1 className="h1-center">title card</h1>
        </div>
        <div className="cell">Image</div>
        <div className="cell formcard-question">
          <form>
            <label className="p">
              Question:
              <input type="checkbox" name="interested" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default FormCard;
