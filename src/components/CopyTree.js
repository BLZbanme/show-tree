import React from "react";
import "../css/mainpage.css";

class CopyTree extends React.Component {

    render() {
        return (
            <div>
                <code className="tree-result">
                    {this.props.treeCode}
                </code>
            </div>
        )
    }
}

export default CopyTree;