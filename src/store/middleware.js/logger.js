const logger = param => store => next => action => {
	// * Currying - SNA to remember args
	// console.log( "store : ", store )
	// console.log( "next : ", next )
	console.log('action : ', action)

	console.log('Logging : ', param)

	next(action) // necessary to continue
}

export default logger
