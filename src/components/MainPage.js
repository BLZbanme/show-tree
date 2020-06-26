import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "../css/mainpage.css";


class MainPage extends React.Component {

    render() {
        return (
            <div className="main-page">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
    
}

export default MainPage;