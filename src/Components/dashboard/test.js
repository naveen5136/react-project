import React,{useState} from "react";


function TestFunction({data}) {
    const[datas,setDatas] =useState(data);
return(
<>
this is test function 1 {datas}</>
)
}
export default TestFunction; 

