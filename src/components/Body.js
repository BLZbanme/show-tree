import React from "react";
import "../css/mainpage.css";
import TheInput from "./TheInput";
import ShowTree from "./ShowTree";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputArray: []
        }
    }

    drawTree(value) {
        if (!value) {
            return;
        }
        let newArray = JSON.parse(value);

        if (!Array.isArray(newArray)) {
            return;
        }

        this.setState({
            inputArray: newArray
        });

    }

    render() {
        return (
            <div className="body-div">
                <TheInput onClick={(value) => this.drawTree(value)} />
                <hr />
                <ShowTree inputArray={this.state.inputArray} />
            </div>
        )
    }
    
}

export default Body;