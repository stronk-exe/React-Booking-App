import React from 'react'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import "../styles/Header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const Header = () => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerList'>
                <div className='headerItem active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='headerItem'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className='headerItem'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className='headerItem'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className='headerItem'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className='headerTitle'>
                A liftime discounts? It's Genuis.
            </h1>
            <p className='headerDesc'>
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
            </p>
            <button className='headerButton'>Sign in/ Register</button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput'/>
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span className='headerSearchText'>date to date</span>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span>2 adults 2 childs 1 room</span>
                </div>
                <div className='headerSearchItem'>
                    <button className='headerButton'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;