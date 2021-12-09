import { useState } from "react";


const RadioButton = ({setSearch}) => {
    const [SearchVar, setSearchVar] = useState('');

 const handleChange = (event) => {
     setSearchVar(event.target.value)
     setSearch(event.target.value)
  }

  const resetRadioState = () => {
    setSearchVar('');
    }
    console.log(SearchVar)
    
  return (
    <form>
      <p>Title</p>
      <div>
        <input
          type="radio"
          value="title"
          checked={SearchVar === 'title'}
          onChange={handleChange}
        /> Title
      </div>
      <div>
        <input
          type="radio"
          value="tags"
          checked={SearchVar === 'tags'}
          onChange={handleChange}
        /> Tags
      </div>
      <div>
        <input
          type="radio"
          value="cast"
          checked={SearchVar === 'cast'}
          onChange={handleChange}
        /> Cast
      </div>
      <div>
        <button
          type="reset"
          onClick={resetRadioState}
        />
      </div>
    </form>
  )
}

export default RadioButton;