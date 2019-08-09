import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import { Input, Button} from 'antd';
import News from '../../models/news'
import 'antd/dist/antd.css';
import './adminPanel.css'

class adminPanel extends Component {

    onChangeArticle = e => {
        this.setState({article: e.target.value})
    };

    onChangeBody = e => {
        this.setState({textBody: e.target.value})
    };

    removeNews = e => {
        Meteor.call("removeNews");
        alert("successful");
        this.props.history.push('/news');
    }

    addNews = e => {
        Meteor.call("addNews", this.state.article, this.state.textBody);
        this.setState({article: ''});
        this.setState({textBody: ''});
    };

    state = {
        article: "",
        textBody: "",
    };

    render() {
        return (
            <div>
                <div className="adminPanelHead">
                    Admin panel
                </div>

                <div className="inputNewsText">
                    <Input type="newsArticle"
                            placeholder="Input article"
                           onChange={this.onChangeArticle}
                    />
                    <Input type="newsBody"
                           placeholder="Input body"
                           onChange={this.onChangeBody}
                    />
                </div>

                <div className="submitButton">

                    <Button onClick={this.addNews}  type="default">
                        Add news
                    </Button>

                    <Button onClick={this.removeNews}  type="default">
                        Remove news
                    </Button>

                </div>

            </div>
        );

    }
}

export default withTracker(() => {
    return {

    };
})(adminPanel);
