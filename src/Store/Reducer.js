
const InitialState = {
    message: 'Subscribe New Plan'
}


const reducer = (state= InitialState, action) => {
    switch (action.type) {
        case 'CHANGE_PLAN':
            return {...state, message: action.message }
        case 'GET_NEWS':
            return { ...state, loading: true };
        case 'SAVE_NEWS':
            // return { ...state, news: action.data };
            return { ...state, news: action.data, loading: false }
        default:
            return state;
    }
}

export default reducer;