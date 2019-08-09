import React from 'react';
import { Route } from 'react-router-dom';
import mainContainerWithAnim from '../ui/containers/mainContainerWithAnim'
import news from '../ui/containers/news'
import adminPanel from '../ui/containers/adminPanel'


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={mainContainerWithAnim}/>
        <Route exact path='/news' component={news}/>
        <Route exact path='/admin' component={adminPanel}/>
    </div>
);

export default BaseRouter;