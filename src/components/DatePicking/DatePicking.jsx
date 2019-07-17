import React from "react";
import DatePicker from "react-datepicker";
 import './DatePicking.css'
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class DatePicking extends React.Component {
    
    state = {
        startDate: new Date()
    };

handleChange = (date) => {
this.setState({
    startDate: date
});

}

render() {
    return (
        <span className="datepicking">
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="d MMMM yyyy"
            />
        </span>
    );
}
}

export default DatePicking