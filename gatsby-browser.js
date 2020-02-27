// custom typefaces
//import "typeface-montserrat"
//import "typeface-merriweather"
import './src/styles/global.css';

export const onRouteUpdate = ( { location, prevLocation } ) => {
	// Make sure stats are tracked correctly.
	// Timeout is necessary to make sure script is loaded.
	setTimeout( () => {
		if ( prevLocation ) {
			window.goatcounter.count( {
				path: location.pathname,
				referrer: prevLocation.href,
				title: document.title,
			} );
		} else {
			window.goatcounter.count( {
				path: location.pathname,
				referrer: document.referrer || null,
				title: document.title,
			} );
		}
	}, 400 );
}
