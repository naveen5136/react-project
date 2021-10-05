import React, {Component} from "react";
import { connect } from "react-redux";


class TestClassFunction extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(props){
      if(props.naveenData){
          console.log(props.naveenData)
      }
    }
    render() {
        return(
            <>This is test class function 2{this.props.data}</>
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
        //getPublicAction: () => dispatch(GetPublicAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TestClassFunction);
