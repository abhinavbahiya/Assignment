import React from 'react';
import Base64 from 'base-64';
import Cookie from 'js-cookie';

class showReminder extends React.Component {
  constructor(props) {
    super(props);
  };

   render() {
      return (
        <div>
          Yes!
          {Cookie.get('note')}
        </div>
      );
   }
}
export default showReminder;


//{JSON.parse(Base64.decode(Cookie.get('note')))}
