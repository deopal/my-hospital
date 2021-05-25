import * as actionTypes from "../actionTypes";

const initialState={
    token:null,
    userId:null,
    error:null,
    username:null,
    authRedirect:'/'
}

const docAuthSuccess=(state,action)=>{
    return{
        ...state,
        token:action.token,
        userId:action.userId,
        username:action.username,
        error:null
    }
};

const docAuthFail=(state,action)=>{
    return{
        ...state,
        error:action.error

    };
}

const docAuthLogout=(state,action)=>{
    return{
        ...state,
        error:null,
        token:null,
        username:null,
        userId:null
    }
}

const docAuthRedirect=(state,action)=>{
    return{
        ...state,
        authRedirect:action.path

    }
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.DOC_AUTH_SUCCESS: return docAuthSuccess(state,action);
        case actionTypes.DOC_AUTH_FAIL: return docAuthFail(state,action);
        case actionTypes.DOC_AUTH_LOGOUT: return docAuthLogout(state,action);
        case actionTypes.DOC_AUTH_REDIRECT: return docAuthRedirect(state,action);
        default: return state;
    }
};


export default reducer;