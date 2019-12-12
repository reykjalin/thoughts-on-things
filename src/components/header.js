import React from 'react'

import { Navigation } from './navigation';
import './header.css';

export const Header = () => {
    return (
		<div className={ 'site-header' }>
			<Navigation />
		</div>
    )
}
