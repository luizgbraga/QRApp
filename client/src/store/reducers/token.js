const INITIAL_STATE = {
    token: ''
}

export default function set_token(state = INITIAL_STATE, action) {
    if(action.type === 'LOG_IN') {
        return { ...state, token: action.token }
    } else {
        return state;
    }
}