import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Base64 from 'base-64';
import Cookies from 'js-cookie';

//import { setDataInCookies } from '.';

class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      lengthRemaining: 100,
      startDate: moment(),
      Occurences: ['EveryDay', 'EveryMonth', 'EveryYear', 'None'],
      selectedOccurence: '',
      isNone: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.getOccurences = this.getOccurences.bind(this);
    this.handleOccurence = this.handleOccurence.bind(this);
    this.setDataInCookies = this.setDataInCookies.bind(this);
    this.checkOccurence = this.checkOccurence.bind(this);
  };

  // contextTypes : {
  //   router: React.proptypes.object
  // }
  //
  // contextTypes: {
  //       router: React.PropTypes.object
  //   },

//   export default function
  setDataInCookies() {
    // let decoded = Base64.encode(JSON.stringify(sessionData));
    sessionStorage.setItem('note', JSON.stringify(this.state.note));
    sessionStorage.setItem('lengthRemaining', JSON.stringify(this.state.lengthRemaining));
    sessionStorage.setItem('startDate', JSON.stringify(this.state.startDate));
    sessionStorage.setItem('selectedOccurence', JSON.stringify(this.state.selectedOccurence));
  }

  handleChange(event) {
    let text = event.target.value;
    let lengthOfNote = text.length;
    this.setState({
      note: event.target.value,
      lengthRemaining: 100-lengthOfNote
    });
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }




  handleSubmit(event) {
    event.preventDefault();
    // make AJAX call here
    //this.context.router.push('url/here');
    this.setDataInCookies();
    location.hash = 'showReminder';
  }

  getOccurences() {
    return this.state.Occurences.map((item, index) => {
      return <option key = {index} value = {item}> {item} </option>
    });
  }

  handleOccurence(event) {
    this.setState({
      selectedOccurence: event.target.value
    });
    console.log(this.refs.dd);
    debugger;
    if (event.target.value === 'None') {
      this.handleDateChange(moment());
      this.setState({
        isNone: true
      });
    }
    else {
      this.setState({
        isNone: false
      });
    }
  }

  checkOccurence(event) {
    debugger;

    return true;
  }

   render() {
      return (
        <div>
           <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Note: &nbsp; &nbsp;
              <input type="text" maxLength="100" value = {this.state.value} onChange = {this.handleChange} />
              </label>
             </div>
             <div>
               <label>
                 Characters Remaining: &nbsp; &nbsp; {this.state.lengthRemaining}
               </label>
             </div>
             <div>
             <label> Date: </label>
             <DatePicker ref = 'datePicker' dateFormat="YYYY/MM/DD" selected = {this.state.startDate} onChange = {this.handleDateChange} disabled = {this.state.isNone} />
             </div>
             <div>
              <label>
                Occurence: &nbsp; &nbsp;
                <select onChange = {this.handleOccurence}> <option value="">Select Occurence</option> {this.getOccurences()} </select>
              </label>
             </div>
             <div>
               <input type="submit" value="Submit" />
             </div>
           </form>
        </div>
      );
    }
  }

export default Reminder;
