import React from "react";

export const UncontolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const colorInput = React.createRef();
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(colorInput.current.value);
  };
  return (
    <form onSubmit={handleSumbit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input
        name="harColor"
        type="text"
        placeholder="Hair Color"
        ref={colorInput}
      />
      <input name="submit" type="submit" />
    </form>
  );
};
