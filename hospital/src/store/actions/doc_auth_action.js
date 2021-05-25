import * as actionTypes from '../actionTypes';
import axios from 'axios';




export const authsuccess=(token,userid,username)=>{
    return{
        type:actionTypes.DOC_AUTH_SUCCESS,
        token:token,
        userId:userid,
        username:username
    };
};

export const authFail=(error)=>{
    return{
        type:actionTypes.DOC_AUTH_FAIL,
        error:error
    };
};

export const logout=()=>{
    localStorage.removeItem('doc_token');
    localStorage.removeItem('doc_expireDate');
    localStorage.removeItem('doc_userId');
    localStorage.removeItem('doc_username');
    return{
        type:actionTypes.DOC_AUTH_LOGOUT
    };
};

export const checkAuthTimeout=(expireTime)=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(logout());
        }, expireTime*1000);
    };
};

export const doc_auth_signup=(first,last,email,password)=>{
    return dispatch=>{
        const authData={
            firstName:first,
            lastName:last,
            email:email,
            password:password
        };
        

        axios.post('/api/doctor/signup',authData)
        .then(response =>{
            console.log(response);
                if(response.data.error){
                    alert(response.data.error);
                }
                else{
                alert(response.data.message);
                window.location = "/doctor_signin" ;
                
            }
        })
        .catch(err=>{
            alert(err);
            // dispatch(authFail(err.response.data.error));
        });
    };
};


export const doc_auth_signin=(email,password)=>{
    return dispatch=>{
        const authData={
            email:email,
            password:password
        };
        
        axios.post('/api/doctor/signin',authData)
        .then(response =>{
            console.log(response);
            if(response.data.error){
                alert(response.data.error);
            }
            else{
          
                const expirationDate= new Date(new Date().getTime() + 24*60*60*1000);
                localStorage.setItem('doc_token',response.data.token);
                localStorage.setItem('doc_expireDate',expirationDate);
                localStorage.setItem('doc_userId',response.data.user._id);
                localStorage.setItem('doc_username',response.data.user.firstName);
                const token=localStorage.getItem('doc_userId');
                console.log(token);
                dispatch(authsuccess(response.data.token,response.data.user._id,response.data.user.firstName));
                dispatch(checkAuthTimeout(24*60*60));
                alert(response.data.message);
                window.location = "/" ;
            }
        })
        .catch(err=>{
            console.log(err);
            alert("something went wrong");
            // dispatch(authFail(err));
        });
    };
};

export const setAuthRedirect=(path)=>{
    return{
        type:actionTypes.DOC_AUTH_REDIRECT,
        path:path
    };
};

export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem('doc_token');
        if(!token){
            dispatch(logout());
        }
        else{
            const expiryDate=new Date(localStorage.getItem('doc_expireDate'));
            if(expiryDate > new Date()){
                const userId=localStorage.getItem('doc_userId');
                const username=localStorage.getItem('doc_username');
                dispatch(authsuccess(token,userId,username));
                dispatch(checkAuthTimeout((expiryDate.getTime() - new Date().getTime())/1000));
            }
            else{
                dispatch(logout());
            }
            

        }
    }
}