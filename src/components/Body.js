import React from "react";
import "../css/mainpage.css";
import TheInput from "./TheInput";
import ShowTree from "./ShowTree";
import CopyTree from "./CopyTree";
import copy  from "copy-to-clipboard";

class Body extends React.Component {
    constructor(props) {
        super(props);
        let defaultArray = new Array(15).fill(0).map((e, index) => index + 1); 
        this.state = {
            inputArray: defaultArray,
            treeCode: this.createTree(defaultArray),
            wrongMessage: "",
            didCopy: false
        }
    }

    drawTree(value) {

        let newArray = this.state.inputArray;
        let wrongMessage;
        try {
            newArray = JSON.parse(value);
            wrongMessage = "";
        }
        catch(err) {
            wrongMessage = "Please enter the correct numbers array ";
        }

        if (!Array.isArray(newArray)) {
            wrongMessage = "Please enter the correct numbers array ";
        }

        if (newArray.length > 15) {
            wrongMessage = "array's length is too long";
        }

        let treeCode = this.createTree(newArray);

        this.setState({
            inputArray: newArray,
            treeCode,
            wrongMessage
        });
    }

    copyResult() {
        copy(this.state.treeCode);
        this.setState({
            didCopy: true
        })
        setTimeout(() => {
            this.setState({
                didCopy: false
            })
        }, 500);
    }

    createTree(array) {

        if (!array || !array.length) {
            return;
        }
        const treeArray = Array.from(array);

        treeArray.unshift(0);

        function dfs(index) {
            if (treeArray[index] == null) {
                return null;
            }

            let node = new treeNode(treeArray[index]);
            node.left = dfs(index * 2);
            node.right = dfs(index * 2 + 1);

            return node;
        }

        return JSON.stringify(dfs(1));
    }

    render() {
        return (
            <div className="body-div">
                <TheInput 
                    inputArray={this.state.inputArray}
                    onClick={(value) => this.drawTree(value)} 
                    onCopy={() => this.copyResult()}
                    wrongMessage={this.state.wrongMessage}
                    didCopy={this.state.didCopy}
                />
                <div className="tree-parent-div">
                    <ShowTree 
                        inputArray={this.state.inputArray}
                    />
                </div>
                <CopyTree 
                    treeCode={this.state.treeCode}
                />
            </div>
        )
    }
    
}

function treeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


export default Body;