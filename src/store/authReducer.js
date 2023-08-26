const initState = {
    isAuthenticated:false,
    
    
}

const authReducer = (state = initState,action) => {
    console.log(action);
if(action.type === 'LOGIN'){
    return {
        ...state,
       isAuthenticated:!state.isAuthenticated
    }
}
if(action.type === 'LOGOUT'){
    return {
       ...state,
       isAuthenticated: !state.isAuthenticated                                                                                                  
    }
}
return state

};


export default authReducer