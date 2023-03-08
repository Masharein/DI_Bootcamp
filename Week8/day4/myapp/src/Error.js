import React from 'react'

class ErrorBoundary extends React.Component{
    constructor() {
        super()
    }

    render() {
        return this.props.children
    }
}

export default ErrorBoundary