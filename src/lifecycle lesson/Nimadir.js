import React, { Component } from 'react'

export default class Nimadir extends Component {

    constructor(){
        super();
        console.log('Constructor is working...')
    }

    componentDidMount(){
        console.log('ComponentDidMount is working...');
    }

    componentWillMount(){
        console.log('ComponentWillMount is working...');
    }

    render() {
        console.log('Render is working ...')
        return (
            <div>
                
            </div>
        )
    }
}
