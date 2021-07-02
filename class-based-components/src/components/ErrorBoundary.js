import React, { Component } from 'react';
import classNames from "./ErrorBoundary.module.css";
export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasState: false };
    }
    componentDidCatch(error) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <div className={classNames.error}><p>Something went Wrong!</p>;</div>
        }
        return (
            this.props.children
        )
    }
}
