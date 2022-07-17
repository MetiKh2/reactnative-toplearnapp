import {usersReducer} from './usersReducer'
import {coursesReducer} from './coursesReducer'
import { combineReducers } from 'redux'


export const reducers=combineReducers({
   courses: coursesReducer,
   user: usersReducer
})