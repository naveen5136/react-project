import React, { Component } from 'react'
import {BhotuAction} from '../../../store/action/BhotuAction'
import { connect } from 'react-redux'

export class Bhotu extends Component {
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(props){
        if(props.naveenData){
            console.log(props.naveenData)

        }
    }
    render() {
        return (
            <></>
        )
    }
}

const mapStateToProps = (state) => ({
    return{
        naveenData:state.BhotuReducerData.data,

        
    }
})

const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Bhotu)
