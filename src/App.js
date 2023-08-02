
    // src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [facility, setFacility] = useState('clubhouse');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState('');

  const handleFacilityChange = (event) => {
    setFacility(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post('http://localhost:5000/book', {
        facility,
        date,
        startTime,
        endTime,
      });
      setMessage(response.data.message + ',Cost is Rs. ' + response.data.cost);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="App" style={{textAlign:'center'}}>
      <h1>Facility Booking App</h1>
      <div><br></br>
        <label>Facility:</label>
        <select value={facility} onChange={handleFacilityChange}>
          <option value="clubhouse">Clubhouse</option>
          <option value="tennisCourt">Tennis Court</option>
        </select>
      </div><br></br>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={handleDateChange} required />
      </div><br></br>
      <div>
        <label>Start Time:</label>
        <input type="time" value={startTime} onChange={handleStartTimeChange} step="3600" required />
      </div><br></br>
      <div>
        <label>End Time:</label>
        <input type="time" value={endTime} onChange={handleEndTimeChange} step="3600" required />
      </div><br></br>
      <button onClick={handleBooking}>Book Facility</button><br></br>
      <p style={{color :'green',fontSize: '30px', fontWeight: 'bold'}}>{message} </p>
    </div>
  );
};

export default App;
