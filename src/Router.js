import React from 'React'
import { observer } from 'mobx-react'
//Local dependencies
import locator from '../state/Store'
import Auth from './UI/Auth'
import Auth from './UI/Home'


@observer
class Router extends React.Component {

    render() {
        return(
            locator.authStore.isLoggedIn 
            ? <Home/>
            : <Auth/>
        )
    }

}