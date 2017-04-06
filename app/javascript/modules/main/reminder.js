import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import Base64 from 'base-64';

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
      isNone: false,
      isActive: true
    }

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOccurence = this.handleOccurence.bind(this);
    this.getOccurences = this.getOccurences.bind(this);
    this.setDataInCookies = this.setDataInCookies.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  ComponentWillMount() {
    // sessionStorage.removeItem('note');
    // sessionStorage.removeItem('startDate');
    // sessionStorage.removeItem('selectedOccurence');
    // Do some coding here
  }

  // contextTypes: {
  //       router: React.PropTypes.object
  //   },

//   export default function
  setDataInCookies() {
    // let decoded = Base64.encode(JSON.stringify(sessionData));
    sessionStorage.setItem('note', JSON.stringify(this.state.note));
    sessionStorage.setItem('startDate', JSON.stringify(this.state.startDate));
    sessionStorage.setItem('selectedOccurence', JSON.stringify(this.state.selectedOccurence));
  }

  handleNoteChange(event) {
    let text = event.target.value;
    let lengthOfNote = text.length;
    this.setState({
      note: event.target.value,
      lengthRemaining: 100-lengthOfNote
    });
    this.validateFields();
  }

  handleDateChange(date) {
    console.log(date.toDate());
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setDataInCookies();
    // make AJAX call here
    //this.context.router.push('url/here');
    location.hash = 'showReminder';
  }

  getOccurences() {
    return this.state.Occurences.map((item, index) => {
      return <option key = {index} value = {item}> {item} </option>
    });
  }

  handleOccurence(event) {
      let selectedValue = this.refs.selectInput.value;
      this.state.selectedOccurence = selectedValue;
      if (selectedValue === 'None') {
          this.state.startDate = moment();
          this.state.isNone = true;
      }
      else {
          this.state.isNone = false;
      }
      this.setState(this.state);
      this.validateFields();
  }

  validateFields() {
    if (this.state.note.length && this.state.selectedOccurence.length) {
        this.setState({
            isActive: false
        });
    }
  }

   render() {
      return (
        <div>
           <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Note: &nbsp; &nbsp;
              <input type="text" maxLength="100" value = {this.state.value} onChange = {this.handleNoteChange} />
              </label>
             </div>
             <div>
               <label>
                 Characters Remaining: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {this.state.lengthRemaining}
               </label>
             </div>
             <div>
             <label> Date: &nbsp; &nbsp;
             </label>
             <DatePicker ref = 'datePicker' dateFormat="YYYY/MM/DD" selected = {this.state.startDate} onChange = {this.handleDateChange} disabled = {this.state.isNone} />
             </div>
             <div>
              <label>
                Occurence:&nbsp; &nbsp; &nbsp;
                <select ref="selectInput" onChange={this.handleOccurence}> <option value="">Select Occurence</option> {this.getOccurences()} </select>
              </label>
             </div>
             <div>
               <input type="submit" value="Submit" disabled = {this.state.isActive} />
             </div>
           </form>
        </div>
      );
    }
  }

export default Reminder;


// className = {this.state.isActive ? 'buttonEnabled' : 'buttonDisabled'}
