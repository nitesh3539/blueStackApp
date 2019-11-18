import React, {} from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import dayjs from 'dayjs';
import '../App.css';
import DatePicker from "react-datepicker";


export default class Calender extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            onShowModal : false,
			startDate: new Date(), // can be any of these ['dayjs()', '', null, new Date(2018,12,1)]
		};
		this.handleChange = this.handleChange.bind(this);
	}

	// handleChange(date) {
	// 	this.setState({
	// 		startDate: date,
	// 	});
    // }
    
    handleChange = date => {
        this.props.setDate(String(date));
      };
    
    //   render() {
    //     return (
    //       <DatePicker
    //         selected={this.state.startDate}
    //         onChange={this.handleChange}
    //       />
    //     );
    //   }

	render() {
		return (
			<ModernDatepicker
				// date={this.state.startDate}
                format={'MM-DD-YYYY'}
                icon={this.props.icon}
                showBorder
                style={{}}
                // onBlur={() => {this.handleChange(this.state.startDate)}}
                // label={this.props.value}
				className="color"
				id="someId"
				// maxDate={dayjs().add('1', 'day')} // can be a javascript date object also (new Date(2018,12,12))
				// minDate={dayjs().subtract('2', 'day')}// can be a javascript date object also (new Date(2018,12,1))
				onChange={date => this.handleChange(date)}
				placeholder={'Select a date'}
				primaryColor={'#d9b44a'}
				secondaryColor={'#75b1a9'}
				primaryTextColor={'#4f6457'}
				secondaryTextColor={'#acd0c0'}
			/>
		);
	}
}