import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./index.scss";
import withRedux from "./withRedux";

class ConstructorParams extends Component {

    handleInputChange(e) {
        const { name, value } = e.target;
        const { changeConstructor, constructor } = this.props;

        changeConstructor({
            ...constructor,
            [name]: value
        });
    }

    render() {
        const { constructor } = this.props;

        return (
            <section className="constructor__params">
                <div className="about">
                    <div className="title">
                        <input 
                            type="text" 
                            name="title"
                            value={constructor.title || ""} 
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                    <div className="description">
                        <input 
                            type="text"
                            name="description"
                            value={constructor.description || ""} 
                            onChange={this.handleInputChange.bind(this)} />
                    </div>
                </div>
                <div className="color">
                    <button name="color" value="#EDE7F6" onClick={this.handleInputChange.bind(this)} style={{background: "#EDE7F6"}}></button>
                    <button name="color" value="#6D6AFF" onClick={this.handleInputChange.bind(this)} style={{background: "#6D6AFF"}}></button>
                    <button name="color" value="#EBFF00" onClick={this.handleInputChange.bind(this)} style={{background: "#EBFF00"}}></button>
                    <button name="color" value="#FF6262" onClick={this.handleInputChange.bind(this)} style={{background: "#FF6262"}}></button>
                </div>
            </section>)
    }
}

export default withRouter(withRedux(ConstructorParams));