import { useState } from "react";
import { FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";

const RadioButton = ({ setSearch }) => {
  const [SearchVar, setSearchVar] = useState("");

  const handleChange = (event) => {
    setSearchVar(event.target.value);
    setSearch(event.target.value);
  };

  const resetRadioState = () => {
    setSearchVar("");
  };
  console.log(SearchVar);

  return (
    // <form>
    //   <p>Title</p>
    //   <div>
    //     <input
    //       type="radio"
    //       value="title"
    //       checked={SearchVar === 'title'}
    //       onChange={handleChange}
    //     /> Title
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       value="tags"
    //       checked={SearchVar === 'tags'}
    //       onChange={handleChange}
    //     /> Tags
    //   </div>
    //   <div>
    //     <input
    //       type="radio"
    //       value="cast"
    //       checked={SearchVar === 'cast'}
    //       onChange={handleChange}
    //     /> Cast
    //   </div>
    //   <div>
    //     <button
    //       type="reset"
    //       onClick={resetRadioState}
    //     />
    //   </div>
    // </form>

    <FormGroup tag="fieldset">
      <legend>Filter Search</legend>
      <FormGroup check>
        <Input
          name="radio1"
          type="radio"
          value="title"
          onChange={handleChange}
        />{" "}
        <Label check>Title</Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio1"
          type="radio"
          value="tags"
          onChange={handleChange}
        />{" "}
        <Label check>Tags</Label>
      </FormGroup>
      <FormGroup check disabled>
        <Input
          name="radio1"
          type="radio"
          value="cast"
          onChange={handleChange}
        />{" "}
        <Label check>Cast</Label>
      </FormGroup>
    </FormGroup>
  );
};

export default RadioButton;
