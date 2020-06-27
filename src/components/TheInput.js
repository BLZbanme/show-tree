import React from "react";
import "../css/mainpage.css";

class TheInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: JSON.stringify(this.props.inputArray)
        }
    }

    handleChange(e) {
        let value;
        if (!e.target.value) {
            value = `[]`;
        }
        else {
            value = e.target.value;
        }

        this.props.onClick(value);

        this.setState({
            value: value
        })
    }

    renderAlertSpan(wrongMessage) {
        if (wrongMessage) {
            return (
                <span className="alert-span">{wrongMessage}</span>
            )
        }
    }

    
    render() {
        return (
            <div className="input-div">
                <div className="input-and-alertspan">
                    <input 
                        className={`body-input ${this.props.hasWrong ? 'wrong-input' : ""}`} 
                        type="text"
                        value={this.state.value}
                        onChange={(e) => this.handleChange(e)}
                        placeholder="please enter a number array" 
                    />
                    {this.renderAlertSpan(this.props.wrongMessage)}
                </div>
                
                <div>
                    <button 
                        className="body-button" 
                        onClick={() => this.props.onCopy()}
                    >
                        copy
                    </button>
                    <div 
                        className={`info-div ${this.props.didCopy ? 'info-div-show' : ""}`}
                    >
                        已复制
                    </div>
                </div>
            </div>
        )
    }
    
}

export default TheInput;