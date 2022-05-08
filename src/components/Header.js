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
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
    };
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/hotels", {state: {destination,date,options}});
    }
  return (
    <div className='header'>
        <div className={type =="list" ? 'headerContainer listMode' : "headerContainer"}>
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
            {type !== "list" && <>    <h1 className='headerTitle'>
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
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.vaue)} />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{ `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}` }</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />
                        }
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{ `${options.adult} adult . ${options.children} children . ${options.room} room` }</span>
                        {openOptions &&
                            <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText'>Adult</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.adult <= 1} onClick={()=>handleOption("adult","d")} className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>{ options.adult }</span>
                                        <button onClick={()=>handleOption("adult","i")}className='optionCounterButton'>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Children</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.children <= 0} onClick={()=>handleOption("children","d")} className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>{ options.children }</span>
                                        <button onClick={()=>handleOption("children","i")} className='optionCounterButton'>+</button>
                                    </div>
                                </div>
                                <div className='optionItem'>
                                    <span className='optionText'>Room</span>
                                    <div className='optionCounter'>
                                        <button disabled={options.room <= 1} onClick={()=>handleOption("room","d")} className='optionCounterButton'>-</button>
                                        <span className='optionCounterNumber'>{ options.room }</span>
                                        <button onClick={()=>handleOption("room","i")} className='optionCounterButton'>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='headerSearchItem'>
                        <button onClick={handleSearch} className='headerButton'>Search</button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header;