import s from './Contact.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";


const Contact = ({ data: {id, name, number}, onDelete }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.datacontainer}>
                <p><AiOutlineUser />{name}</p>
                <p><AiTwotonePhone /> {number}</p>
            </div>
            
            <button className={s.btn} type="submit" onClick={()=>onDelete(id)}>Delete</button>
      </div>
    )
  }
  
  export default Contact