import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Aside = () => {
	return ( 
		<aside className="aside">
			<NavLink to='/' className='link' activeClassName='link--active' exact>LOGO</NavLink>
			<NavLink to='/clean/prod' className='link' activeClassName='link--active'>
				Offistone.Clean.prod
			</NavLink>
			<NavLink to='/clean/dev' className='link' activeClassName='link--active'>
				Offistone.Clean.dev
			</NavLink>
		</aside>
	);
};

export default Aside;
