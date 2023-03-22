const Message = ({ data, reset }) => {
  return (
    <>
        <h2>{data.lastName}, {data.firstName}</h2>
        <h2>{data.phone}|{data.email}</h2>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default Message