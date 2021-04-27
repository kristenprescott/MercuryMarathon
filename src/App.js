import { Link, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import Register from './Pages/Register'
import LiveEvent from './Pages/LiveEvent'
import PreviousRaces from './Pages/PreviousRaces'
import logo from './images/logo-2.png'

function App() {
	const [revealHeader, setRevealHeader] = useState(false)
	const date = new Date()
	const year = date.getFullYear()

	const handleClick = () => {
		setRevealHeader(true)
	}

	return (
		<div className="App">
			<header className={revealHeader ? "reveal-header" : ""}>
				<div className={revealHeader ? "container move-title" : "container"}>
					<div className="logo-div">
						<img src={logo} alt="" />
					</div>
					<div className="title-div">
						<h2 className="white light italic">the annual</h2>
						<h1 className="white"><span className="light">MERCURY</span> MARATHON</h1>
					</div>
				</div>
				<div className={revealHeader ? "enter hide" : "enter"}>
					<h3 onClick={handleClick} >Enter</h3>
				</div>
				<nav>
					<div className={revealHeader ? "nav-div show-nav" : "nav-div"}>
						<ul className="nav">
							<li className="nav-item">
								<Link to='/' className='nav-link'>Home</Link>
							</li>
							<li className="nav-item">
								<Link to='/register' className='nav-link'>Register</Link>
							</li>
							<li className="nav-item">
								<Link to='/live_event' className='nav-link'>Live Event</Link>
							</li>
							<li className="nav-item">
								<Link to='/previous_races' className='nav-link'>Previous Races</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<main>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/register' component={Register} />
					<Route path='/live_event/' component={LiveEvent} />
					<Route path='/previous_races/' component={PreviousRaces} />
				</Switch>
			</main>
			<footer>
				<p> &#169; {year} Knights of the ERICA Round Table</p>
				<p><small>Images from The Boston Marathon used under Fair Use for academic purposes.</small></p>
			</footer>
		</div>
	);
}

export default App;
