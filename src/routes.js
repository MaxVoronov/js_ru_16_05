import { Router, Route, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleIndex from './RouteHandlers/ArticlesIndex'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentsIndex from './RouteHandlers/CommentsIndex'

export default (
    <Router history = {browserHistory}>
        <Route path = "/articles" component = {ArticleIndex}>
            <Route path = ":id" component = {ArticlePage} />
        </Route>
        <Route path = "/comments(/:page)" component = {CommentsIndex} />
    </Router>
)
