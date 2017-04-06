  import React from 'react';
  //import Base64 from 'base-64';

  class showReminder extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        note: '',
        startDate: '',
        selectedOccurence: ''
      }

      this.showData = this.showData.bind(this);
    };

    componentWillMount() {
      if (!sessionStorage.note && !sessionStorage.startDate && !sessionStorage.selectedOccurence) {
        // location.hash = '/';
        window.location = '/';
      }
    }


    showData() {
      this.state.note = sessionStorage.getItem('note');
      this.state.startDate = sessionStorage.getItem('startDate');
      this.state.selectedOccurence = sessionStorage.getItem('selectedOccurence');
      return " This is your Reminder NOTE: " + this.state.note + " Date for Reminder is " + this.state.startDate.slice(0, 11) + "\" and it will occur " + this.state.selectedOccurence;
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
