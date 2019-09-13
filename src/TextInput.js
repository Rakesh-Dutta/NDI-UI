import React, {Component} from "react";

// export interface InputProps {
//     value: string;
// }

export default class TextInput extends Component{
    render(){
        return <input type="text" value={this.props.value} />;
    }
}