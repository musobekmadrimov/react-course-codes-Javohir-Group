import React, { Component } from 'react'

export default class Component2 extends Component {
    render() {
        return (
            <div>
                <h1>You're {this.props.profession}</h1>
            </div>
        )
    }
}
