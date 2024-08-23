import React,{ useContext } from 'react';
import Styles from './EmployeeCard.module.css';
import ThemeContext from './ThemeContext';
function EmployeeCard(props) {
    const obj=useContext(ThemeContext);
    return (
        <div className={Styles.Card}>
            <h3>{props.employee.name}</h3>
            <p>{props.employee.email}</p>
            <p>{props.employee.phone}</p>
            <p>
                <a href="#" className={obj.theme}>Edit</a> 
                <a href="#" className={obj.theme}>Delete</a> 
            </p>
        </div>
    );
}
export default EmployeeCard;

