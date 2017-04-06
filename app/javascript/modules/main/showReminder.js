import React from 'react';
//import Base64 from 'base-64';

class showReminder extends React.Component {
  constructor(props) {
    super(props);
    this.showData = this.showData.bind(this);
  };

  showData() {
    let note = sessionStorage.getItem('note');
    let startDate = sessionStorage.getItem('startDate');
    let selectedOccurence = sessionStorage.getItem('selectedOccurence');
    return " This is your Reminder NOTE: " + note + " Date for Reminder is " + startDate.slice(0, 11) + "\" and it will occur " + selectedOccurence;
  }

   render() {
      return (
        <div>
          Yes!
          {this.showData()}
        </div>
      );
   }
}

export default showReminder;


//{JSON.parse(Base64.decode(Cookie.get('note')))}
