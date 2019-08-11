import React, { Component } from 'react'
import { Description, Home, AppStore, Kaya, HomeAfter, Survey, Popup, Input, Main } from '../pages'
import Header from './Header'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'Description.',
            ver : 'A',
            popupText : '',
            showPopup : false
        }
        this.handler = this.handler.bind(this)
    }

    handler(someValue){
        this.setState({
            title : someValue,
            showPopup : true
        })
        if(this.state.title === 'Hello'){
            this.setState({
                popupText : 'Please access app store'
            })
        }
    }

    render() {
        var app = null
        if(this.state.title === 'Description.') app = <Description handler = {this.handler}/>
        else if(this.state.title === 'Hello.') app = <Home handler={this.handler}/>
        else if(this.state.title === 'Install application.') app = <AppStore handler={this.handler}  ver = {this.state.ver}/>
        else if(this.state.title === 'Click the KAYA application.') app = <HomeAfter handler={this.handler}/>
        else if(this.state.title === 'Main view.') app = <Kaya handler={this.handler}/>
        else if(this.state.title === 'Survey.') app = <Survey/>
        return (<div>
            <div>
            {app}
            </div>
            {this.state.showPopup ?  <Popup text = {this.state.popupText}/> : <div/>}
            </div>
        );
    }
}

export default App;