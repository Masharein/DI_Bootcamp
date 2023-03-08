import Counter from './Components/Counter'
const Parent = (props) => {
    if(props.auth === 'admin')
return (
    <>
    {props.children}
    <Counter/>
    </>
)
}
export default Parent