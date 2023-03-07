const User = (props) => {
// console.log(props)
const users_style = {
    display: 'inline-block',
     padding: '10px',
      margin: '20px',
       border: '1px solid #ccc',
        textAlign: 'center'
    }
    return (
        <div style = {users_style}>
       <h2>{props.name}</h2>
       <p>{props.email}</p>
       <h3>{props.username}</h3>
       </div>
    )
}
export default User