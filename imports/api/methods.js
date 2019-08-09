import { Meteor } from 'meteor/meteor';
import News from "../models/news";

Meteor.methods({
    'addNews'(articleText, newsText) {
        const newNews = new News({
            article: articleText,
            newsBody: newsText,
        });
        newNews.save();
    }
});

Meteor.methods({
    'removeNews'() {
        News.remove({});
    }
});