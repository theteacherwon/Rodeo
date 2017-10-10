import React from 'react';
import "../CSS/event-box.css"
class EventBox extends React.Component {  
  render() {
        const event = this.props.event
        return <div className="event-box">
          <div className='background'>
            <div className="info">
            <header className='horse'> RODEO </header> 
              <h2>Title: {event.title}</h2>
              <h2>Date: {event.lf_start_time}</h2>
              <h2>: {event.description} </h2>
            </div>
            </div>
          </div>
    }
 }
export default EventBox;