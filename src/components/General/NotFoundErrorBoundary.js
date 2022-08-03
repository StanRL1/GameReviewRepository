import { Component } from 'react';
import MyImage from '../../images/istockphoto-143921954-612x612.jpg'

class NotFoundErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                <h1>An error has occured</h1>
                <img src={MyImage} alt=""></img>
                <p>We are trying to fix the problem ASAP</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default NotFoundErrorBoundary;