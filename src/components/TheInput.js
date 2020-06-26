import React from "react";
import "../css/mainpage.css";

class TheInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input 
                    className="body-input" 
                    type="text"
                    value={this.state.value}
                     onChange={(e) => this.handleChange(e)}
                    placeholder="请输入数组" 
                />
                <button 
                    className="body-button" 
                    onClick={() => this.props.onClick(this.state.value)}
                >
                    展示树
                </button>
            </div>
        )
    }
    
}

export default TheInput;