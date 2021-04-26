import { Link } from "react-router-dom"
import jumbo from "../images/jumbo.jpeg"
import image1 from "../images/image1.jpeg"
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import Countdown from "react-countdown";

const Competionist = () => <p>IT'S NOW!</p>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		return <Competionist />
	} else {
		return (
			<h2>
				{days}<span className="light">d : </span>{hours}<span className="light">h : </span>{minutes}<span className="light">m : </span>{seconds}<span className="light">s</span>
			</h2>
		)
	}
}

const eventDate = new Date(2021, 6, 27, 8)

export default function Home() {
	return (
		<div className='Home'>
			<div className="jumbo">
				<img src={jumbo} alt="" />
			</div>
			<div className="countdown-div">
				<p>countdown to <span className="heavy">MERCURY 2021</span>:</p>
				<Countdown date={eventDate} renderer={renderer} />
			</div>
			<div className="content-2">
				<div className="race-info">
					<h2><span className="light">RACE</span> INFO</h2>
					<ul>
						<li>
							<FiCalendar />
							<p>June 27th, 2021</p>
						</li>
						<li>
							<FiClock />
							<p>8:00 AM (first wave)</p>
						</li>
						<li>
							<FiMapPin />
							<p>805 Main Street, Grand City, CA</p>
						</li>
					</ul>
					<Link to="/register">Register Now!</Link>
					<h3><span className="light">PACKET PICKUP</span> INFO</h3>
					<p>Head to the Check-In tent to pickup everything you'll need for the grand event!</p>
					<p>If you have little ones that need tending, we are providing free daycare during the event!</p>
					<p>And, as always, enjoy a cold beer at the finish-line, courtesy of our sponsor Grand City Brewery!</p>
				</div>
				<div className="pic">
					<img src={image1} alt="" />
				</div>
			</div>
		</div>
	)
}