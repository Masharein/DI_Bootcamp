import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    setUser(inputValue);
    setInputValue('');
  }

  function handleInputChange(event) {
    event.preventDefault()
    setInputValue(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter new user name"
        />
        </label>
        <button type="submit">Change user</button>
      </form>
    </>
  );
};

export default ChangeUser;