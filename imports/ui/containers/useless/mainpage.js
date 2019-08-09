import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Carousel, Img } from 'antd';
import 'antd/dist/antd.css';
import './carousel.css'

class mainpage extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div className="firstPage">
                        <img src="/first.jpg" alt="asd"/>
                    </div>
                    <div>
                        <img src="/second.jpg" alt="asd"/>
                    </div>
                    <div>
                        <img src="/third.jpg" alt="asd"/>
                    </div>
                </Carousel>
            </div>
        );

    }
}

export default withTracker(() => {
    return {

    };
})(mainpage);
