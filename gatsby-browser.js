// Use global stylesheet.
import './src/styles/global.css';

const updateCount = ( path, referrer, title, retries = 1 ) => {
	if ( ! window.goatcounter ) {
		if ( retries > 0 ) {
			setTimeout( updateCount( path, referrer, title, retries - 1 ), 400 );
			return;
		}
		return;
	}
	window.goatcounter.count( {
		path,
		referrer: referrer || null,
		title,
	} );
};

export const onRouteUpdate = ( { location, prevLocation } ) => {
	// Make sure stats are tracked correctly.
	// Timeout is necessary to make sure GoatCounter script is loaded.
	if ( prevLocation ) {
		setTimeout( updateCount( location.pathname, prevLocation.href, document.title ), 400 );
	} else {
		setTimeout( updateCount( location.pathname, document.referrer, document.title ), 400 );
	}
};
