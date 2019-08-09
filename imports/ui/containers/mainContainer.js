import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Carousel, Img } from 'antd';
import 'antd/dist/antd.css';
import './mainPage.css'

import { Button} from 'antd';

class mainContainer extends Component {

    pushMainPageInHistory = e => {
        this.props.history.push('/news');
    }

    render() {
        return (
            <div>

                <div className="line1">
                </div>

                <div className="topLineText">
                    NeuralBlog
                </div>

                <div className="startedButton">
                    <Button onClick={this.pushMainPageInHistory} type="default">Discover</Button>
                </div>
            </div>
        );

    }
}

export default withTracker(() => {
    return {

    };
})(mainContainer);
