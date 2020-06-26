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
            <div className="input-div">
                <input 
                    className="body-input" 
                    type="text"
                    value={this.state.value}
                     onChange={(e) => this.handleChange(e)}
                    placeholder="please enter a number array" 
                />
                <button 
                    className="body-button" 
                    onClick={() => this.props.onClick(this.state.value)}
                >
                    show
                </button>
                <button 
                    className="body-button" 
                    onClick={() => this.props.onCopy()}
                >
                    copy
                </button>
            </div>
        )
    }
    
}

export default TheInput;