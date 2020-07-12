import React from "react";
import "../css/mainpage.css";

function TreeNodeSpan(props) {
    return (
        <span className="node-span">
            {props.value != null ? props.value : ""}
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
        return (
            <div className="tree">
                <ul>
                    <li>
                        {this.renderTreeNodeSpan(0)}
                        <ul>
                            <li>
                                {this.renderTreeNodeSpan(1)}
                                <ul>
                                    <li>
                                        {this.renderTreeNodeSpan(3)}
                                        <ul>
                                            <li>
                                                {this.renderTreeNodeSpan(7)}
                                            </li>
                                            <li>
                                                {this.renderTreeNodeSpan(8)}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {this.renderTreeNodeSpan(4)}
                                        <ul>
                                            <li>
                                                {this.renderTreeNodeSpan(9)}
                                            </li>
                                            <li>
                                                {this.renderTreeNodeSpan(10)}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                {this.renderTreeNodeSpan(2)}
                                <ul>
                                    <li>
                                        {this.renderTreeNodeSpan(5)}
                                        <ul>
                                            <li>
                                                {this.renderTreeNodeSpan(11)}
                                            </li>
                                            <li>
                                                {this.renderTreeNodeSpan(12)}
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {this.renderTreeNodeSpan(6)}
                                        <ul>
                                            <li>
                                                {this.renderTreeNodeSpan(13)}
                                            </li>
                                            <li>
                                                {this.renderTreeNodeSpan(14)}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ShowTree;