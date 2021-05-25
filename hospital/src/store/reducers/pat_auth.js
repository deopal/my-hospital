import * as actionTypes from "../actionTypes";

const initialState={
    token:null,
    userId:null,
    error:null,
    username:null,
    authRedirect:'/'
}

const patAuthSuccess=(state,action)=>{
    return{
        ...state,
        token:action.token,
        userId:action.userId,
        username:action.username,
        error:null
    }
};

const patAuthFail=(state,action)=>{
    return{
        ...state,
        error:action.error

    };
}

const patAuthLogout=(state,action)=>{
    return{
        ...state,
        error:null,
        token:null,
        userId:null,
        username:null
    }
}

const patAuthRedirect=(state,action)=>{
    return{
        ...state,
        authRedirect:action.path

    }
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.PAT_AUTH_SUCCESS: return patAuthSuccess(state,action);
        case actionTypes.PAT_AUTH_FAIL: return patAuthFail(state,action);
        case actionTypes.PAT_AUTH_LOGOUT: return patAuthLogout(state,action);
        case actionTypes.PAT_AUTH_REDIRECT: return patAuthRedirect(state,action);
        default: return state;
    }
};


export default reducer;

