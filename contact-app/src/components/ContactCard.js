import React from 'react';
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
            <Link to={{ pathname: '/contact/{id}', state: { contact: props.contact } }} >
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link>
        </div>
        
            <i className="ui trash alternate right floated icon" 
            style={{ color:"red", marginTop: "10px" }}
        onClick={() => props.clickHandler(id)}
        ></i>
     </div>
  
    );
   
};

export default ContactCard;
