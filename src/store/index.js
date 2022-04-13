import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/reducers/cartReducer'
import logger from './middleware.js/logger'

const rootReducer = combineReducers({
	// bugs: bugsReducer,
	// projects: projectsReducer,
	// users: usersReducer
	cart: cartReducer,
})

const store = configureStore({
	reducer: cartReducer,
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
	// middleware: [
	// ...getDefaultMiddleware(),
	// logger( { destination: "console" } ),
	// toast,
	// api
	// ],
})

export default store
