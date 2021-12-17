import React from "react";

const Form = ({ data }) => {
  const firstInput = data[0];
  const secondInput = data[1];
  const textArea = data[2];
  return (
    <form>
      <div className="row">
        <div className="col">
          <input
            type={firstInput.type}
            className="form-control"
            placeholder={firstInput.placeholder}
            name={firstInput.name}
          />
        </div>
        <div className="col">
          <input
            type={secondInput.type}
            className="form-control"
            placeholder={secondInput.placeholder}
            name={secondInput.name}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <textarea
            className="form-control"
            rows="6"
            id={textArea.id}
            name={textArea.name}
            placeholder={textArea.placeholder}
            style={{ width: "100%" }}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default Form;
