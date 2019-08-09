import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Carousel , Button, Card} from 'antd';
import News from '../../models/news'

import 'antd/dist/antd.css';
import './news.css'

class news extends Component {


    render() {
        return (
            <div>
                <div className="animatedHead">
                    Latest new's
                </div>

                <div className="newsCarousel">
                    <Carousel autoplay>
                        <div>
                            <h3>Russians will repair the pipeline with AI</h3>
                        </div>
                        <div>
                            <h3>I'm learning css</h3>
                        </div>
                        <div>
                            <h3>Two guys made DeepNude bot</h3>
                        </div>
                    </Carousel>
                </div>



                <div>
                    {this.props.news && this.props.news.map((message, id) => (
                        <Card key={id}>
                            <div className="newsArticle">{message.article}</div>
                            <div className="newsBody">{message.newsBody}
                                <div className="line">
                                </div>
                            </div>

                        </Card>
                    ))}
                </div>

            </div>
        );

    }
}

export default withTracker(() => {
    return {
        news: News.find().fetch(),
    };
})(news);
