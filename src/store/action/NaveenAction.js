import httpService from "../../httpService";

export const PostNaveenAction = (data) => {
    debugger;
    return (dispatch) => {
        httpService.post_unAuth("loginwithotp/",data).then(response=>{
            console.log(response)
            debugger;
            dispatch({ type: "SET_PUBLISH_DATA", payload: response.data.message });
        }).catch(error=>{
            console.log(error)
            debugger
        }
            );
    }
} 
