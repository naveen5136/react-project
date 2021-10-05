import React from 'react'
import PropTypes from 'prop-types';
import { PostNaveenAction } from '../../../store/action/NaveenAction';
import { connect } from "react-redux";


import history from '../../../history';
import TestFunction from '../test';
import TestClassFunction from '../test2';
import httpService from '../../../httpService';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:"",
            errormessage: '',
            message:"",
        };
    }

    changeHandler=(e)=> {
        console.log(e.target.name);
        let username=e.target.value;
        let password=e.target.value;
        let err='';
        this.setState({
            username:username,
            password:password
        });
        this.setState({errormessage:err}); 
        
     if(username !="" && username.length > 11) {
         alert("username must be 8 character");
     } 
} 
 toDashboard (){
    console.log(this.state.username)
    let data ={
        locale:"en",
        mobile:this.state.username,
    }
    this.props.PostNaveenAction(data);
    this.props.BhotuAction(data);
    // httpService.post_unAuth("loginwithotp/",data).then(response=>{
    //         console.log(response)
    //         this.setState({message:response.data.message})
    //     }).catch(error=>{
    //         console.log(error)
    //     }
    //         );
    //history.push('/header')
}
componentWillReceiveProps({naveenData}){
    if(naveenData)
         {
             console.log(naveenData)
         }
}
    render() { 
    return (
        <>
        <div> This is signin</div>
         <input type="text" value={this.state.username} placeholder="username" name="username" onChange={this.changeHandler} required></input>
         <input type="password" value={this.state.password} placeholder="password" name="password" onChange={this.changeHandler} required></input>
         <button onClick={()=>{this.toDashboard()}}>Submit</button>
         {this.state.errormessage!=''?this.state.errormessage:''}
         {this.state.message}
        <TestFunction data={this.state.username}/>
        <TestClassFunction data={this.state.password}></TestClassFunction> </>       
    )
}
}
const mapStateToProps = (state) => {
    return {
        naveenData:state.NaveenReducerData.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        PostNaveenAction: (data) => dispatch(PostNaveenAction(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
