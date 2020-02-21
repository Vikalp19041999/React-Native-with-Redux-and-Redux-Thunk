import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import { fetchData, fetchDataFulfilled, fetchDataRejected } from './reducer'

export const getPeople = () => {
    return async dispatch => {
        try {
            const starWarsPromise = await fetch('https://swapi.co/api/people/')
            dispatch(fetchData(true))
            const people = starWarsPromise.json();
            console.log(people)
            dispatch(fetchDataFulfilled(people.results))
        }
        catch (error) {
            dispatch(fetchDataRejected(error))
        }
    }
}

export default createStore(reducer, applyMiddleware(thunk))