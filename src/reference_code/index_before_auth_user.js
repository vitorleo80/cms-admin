import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {NavBar, Welcome, Footer, CreateArticle, Login, SingleArticle, SignUp} from './components'
import * as serviceWorker from './serviceWorker';


const Main = withRouter(({location}) => (
        <div>
            { location.pathname !== '/login' && location.pathname !== '/signup' &&
            <NavBar/>
            }
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/article/:slug" component={SingleArticle}/>
            <Route exact path="/articles/create" component={CreateArticle}/>
            { location.pathname !== '/login' && location.pathname !== '/signup' &&
            <Footer/>
            }
        </div>
    )
)

ReactDOM.render(

<BrowserRouter>
<div>
    <Main/>
</div>
</BrowserRouter>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
