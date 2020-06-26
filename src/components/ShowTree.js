import React from "react";
import "../css/mainpage.css";

function TreeNodeSpan(props) {
    console.log("props", props.value);
    return (
        <span className="node-span">
            {props.value ? props.value : ""}
        </span>
    )
}

class ShowTree extends React.Component {
    
    renderTreeNodeSpan(i) {
        return (
            <TreeNodeSpan 
                value={this.props.inputArray[i]}
            />
        )
    }

    render() {
        console.log(this.props.inputArray);
        return (
            <div className="tree-div">
                <div className="row-div">
                    {this.renderTreeNodeSpan(0)}
                </div>
                <div className="row-div">
                    {this.renderTreeNodeSpan(1)}
                    {this.renderTreeNodeSpan(2)}
                </div>
                <div className="row-div">
                    {this.renderTreeNodeSpan(3)}
                    {this.renderTreeNodeSpan(4)}
                    {this.renderTreeNodeSpan(5)}
                    {this.renderTreeNodeSpan(6)}
                </div>
                <div className="row-div">
                    {this.renderTreeNodeSpan(7)}
                    {this.renderTreeNodeSpan(8)}
                    {this.renderTreeNodeSpan(9)}
                    {this.renderTreeNodeSpan(10)}
                    {this.renderTreeNodeSpan(11)}
                    {this.renderTreeNodeSpan(12)}
                    {this.renderTreeNodeSpan(13)}
                    {this.renderTreeNodeSpan(14)}
                </div>
            </div>
        )
    }
}

export default ShowTree;