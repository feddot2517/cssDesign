import {Class} from 'meteor/jagi:astronomy';

const News = Class.create({
    name: 'News',
    collection: new Meteor.Collection('news'),

    fields: {
        article: {
            type: String,
            optional: true,
        },
        newsBody: {
            type: String,
            optional: true,
        },
    },
});

export default News;