import jQuery from 'jquery'

const chooseConnection = document.getElementById( 'pull_connections' )

jQuery( chooseConnection ).on( 'change', ( event ) => {

	document.location = event.currentTarget.options[event.currentTarget.selectedIndex].getAttribute( 'data-pull-url' )

	document.body.className += ' ' + 'dt-loading'
} )
