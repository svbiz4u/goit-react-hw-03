import s from './Contact.module.css'


const Contact = ({ data: {id, name, number}, onDelete }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.datacontainer}>
                <p> {name}</p>
                <p> {number}</p>
            </div>
            
            <button className={s.btn} type="submit" onClick={()=>onDelete(id)}>Delete</button>
      </div>
    )
  }
  
  export default Contact