// Filename - App.js
import '../Component/Style.css';
import React, { useState, useRef, useEffect } from "react";
import {Row,Col} from 'reactstrap';
import T2 from '../Component/timer.png';
const App = () => {
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState("00:00:00");

	const getTimeRemaining = (e) => {
		const total =
			Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor(
			(total / 1000 / 60) % 60
		);
		const hours = Math.floor(
			(total / 1000 / 60 / 60) % 24
		);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } =
			getTimeRemaining(e);
		if (total >= 0) {
			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : "0" + hours) +
				":" +
				(minutes > 9
					? minutes
					: "0" + minutes) +
				":" +
				(seconds > 9 ? seconds : "0" + seconds)
			);
		}
	};

	const clearTimer = (e) => {
		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next
		setTimer("12:00:00");

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 60);
		return deadline;
	};

    const getMinTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setMinutes(deadline.getMinutes() + 60);
		return deadline;
	};

    const getHourTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setHours(deadline.getHours() + 12);
		return deadline;
	};

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

    useEffect(() => {
		clearTimer(getMinTime());
	}, []);

    useEffect(() => {
		clearTimer(getHourTime());
	}, []);
	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());

	
	};

  

	return (
		
		<div>
			<container>
               <Row>
                    <Col xs="12" lg="6" md="6" sm="12" >
                    
						<img src ={T2} alt="logo_read" className="timer_img"/>
                    
                    </Col>
                    <Col xs="12" lg="6" md="6" sm="12">
                    <div className="timer_msg">
                    <h1>
				     Deal of the Day
			       </h1>
			        <h2>{timer}</h2>
                    </div>
                    <div>
                        <h5 className="timer_msg2">" Dive into Savings! Today only, Get our entire series of books at a minimum price with a 
                        fantastic 75% discount, but act fast – this offer won't last long! this is the perfect opportunity to expand your collection.
						Don’t let this chance slip away—visit us today and discover your next great read at an unbeatable price!
						Click the down button,
						</h5>
                    </div>
					
                    </Col>
                </Row>
           
				</container>	
			{/*<button onClick={onClickReset}>Reset</button>*/}
		</div>
		
	);
};

export default App;
