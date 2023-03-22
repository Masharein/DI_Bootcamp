const User = ({ id, name, username, email, address }) => {
  return (
    <>
    <h2>Id: {id}</h2>
    <h2>Name: {name}</h2>
    <h2>Username: {username}</h2>
    <h2>Email: {email}</h2>
    <h2>City: {address.city}</h2>
    </>
  )
}

export default User