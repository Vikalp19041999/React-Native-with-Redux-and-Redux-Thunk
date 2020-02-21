const initialState = {
    people: [],
    loading: true,
    errorMessage: ''
}

const GET_PEOPLE = 'GET_PEOPLE'
const GET_PEOPLE_FULFILLED = 'GET_PEOPLE_FULFILLED'
const GET_PEOPLE_REJECTED = 'GET_PEOPLE_REJECTED'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLE:
            return {
                ...state,
                loading: action.payload
            }

        case GET_PEOPLE_FULFILLED:
            return {
                ...state,
                people: action.payload,
                loading: action.loading
            }

        case GET_PEOPLE_REJECTED:
            return {
                ...state,
                errorMessage: action.payload,
                loading: action.loading
            }

        default:
            return state
    }
}

export const fetchData = (bool) => {
    return {
        type: GET_PEOPLE,
        payload: bool
    }
}

export const fetchDataFulfilled = (data) => {
    return {
        type: GET_PEOPLE_FULFILLED,
        payload:data,
        loading:false
    }
}

export const fetchDataRejected = (error)=> {
    return {
        type: GET_PEOPLE_REJECTED,
        payload:error,
        loading:false
    }
}

export default reducer