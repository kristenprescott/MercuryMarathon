import { Link, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register/Register'
import LiveEvent from './Pages/LiveEvent/LiveEvent'
import PreviousRaces from './Pages/PreviousRaces/PreviousRaces'
import logo from './images/logo-2.png'
import { Button } from '@material-ui/core'

function App() {
	return (
		<div className="App">
			<header>
				<div className="container">
					<div className="logo-div">
						<img src={logo} alt="" />
					</div>
					<div className="title-div">
						<h2 className="white light italic">the annual</h2>
						<h1 className="white"><span className="light">MERCURY</span> MARATHON</h1>
					</div>
				</div>
				<nav className="NavBar">
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

			</footer>
		</div>
	);
}

export default App;
