import React, {} from 'react';
import '../App.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import calender from '../Images/calendar.png'
import 'bootstrap-daterangepicker/daterangepicker.css';


export default class Calender extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

    handleChange = (event, picker) => {
        this.props.setDate(picker.startDate);
    };
	render() {
		return (
           <DateRangePicker singleDatePicker
			onApply={this.handleChange}
			>
				<div>
                <img src={calender} style={{ width: 25, height: 25, marginRight: 10 }} alt="logo" />
				</div>
			</DateRangePicker>	
		);
	}
}