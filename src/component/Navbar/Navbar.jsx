import React from 'react'
import { NotificationsActive } from '@material-ui/icons'
import { Search } from '@material-ui/icons'
import { Brightness4 } from '@material-ui/icons'
import { Message } from '@material-ui/icons'
import { Language } from '@material-ui/icons'
import './navbar.scss'



const Navbar = () => {



	return (
		<div className='navbar'>
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder='Search...' />
					<Search />
				</div>
				<div className="items">
					
					<div className="item">
						<Brightness4 className='icon' />
					</div>
					<div className="item">
						<NotificationsActive className='icon' />
						<div className='counter'>1</div>
					</div>
					{/* <div className="item">
						<Message className='icon' />
						<div className='counter'>2</div>
					</div> */}
					<div className="item">
						<img src='https://www.iriset.in/tms/uploads/profile/profile.png' alt="user" className='avatar' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar