import React from "react";

function FormCard() {
  return (
    <div className="grid-x">
      <div className="cell">
        <h1 className="h1-center">title card</h1>
      </div>
      <div className="cell">Image</div>
      <div className="cell formcard-question">
        <form>
          <span className="p">
            Question:
            <input type="checkbox" name="interested" />
          </span>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default FormCard;
