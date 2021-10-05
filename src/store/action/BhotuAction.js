const BhotuAction=()=>{
    return (dispatch)=>{

        httpService.post_unAuth("loginwithotp/",data).then(response=>{
            console.log(response)
          
            dispatch({ type: "SET_PUBLISH_DATA", payload: response.data.message });
        }).catch(error=>{
            console.log(error)
        }
            );
    }
} 