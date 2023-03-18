import './Info.css'
import styles from './Info.module.css'

console.log(styles)
// {
//     info: 'Info_info__6brfy', 
//     myOtherButton: 'Info_myOtherButton__9Ihy+'
// }

const Info = () => {
    return (
        <div className={styles.info}>
        <h1>Hello from the Info component</h1>
        <h2>Heading in the Info component</h2>
        <button className="my-button">Info button</button>
        <br />
        <button className={styles.myOtherButton}>Button with local css styles</button>
        </div>
    )
}

export default Info