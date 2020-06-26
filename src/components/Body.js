import React from "react";
import "../css/mainpage.css";
import TheInput from "./TheInput";
import ShowTree from "./ShowTree";
import CopyTree from "./CopyTree";
import copy  from "copy-to-clipboard";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputArray: [],
            treeCode: ""
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

        let treeCode = this.createTree(newArray);

        this.setState({
            inputArray: newArray,
            treeCode
        });
    }

    copyResult() {
        copy(this.state.treeCode);
        alert(`已copy：${this.state.treeCode}`);
    }

    createTree(array) {

        if (!array || !array.length) {
            return;
        }
        const treeArray = Array.from(array);
        console.log("treeArray", treeArray);

        treeArray.unshift(0);

        function dfs(index) {
            if (!treeArray[index]) {
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
                    onClick={(value) => this.drawTree(value)} 
                    onCopy={() => this.copyResult()}
                />
                <ShowTree 
                    inputArray={this.state.inputArray}
                />
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