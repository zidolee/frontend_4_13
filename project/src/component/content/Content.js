import React from 'react';

export class Content extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        }

        this.increaseCount = this.increaseCount.bind(this);     //this. 윈도우의 this이기때문에 바인딩 해줘야 함
        this.decreaseCount = this.decreaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    increaseCount(){
        const current = this.state.count;
        this.setState({                                         //??
            count: current + 1
        })
        console.log(this.state);
    }

    decreaseCount(){
        const current = this.state.count;
        this.setState({
            count: current - 1
        })
        console.log(this.state);
    }

    resetCount(){
        // const current = this.state.count;;
        this.setState({
            count: 0
        })
        console.log(this.state);
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.decreaseCount}>Down</button>
                <button onClick={this.increaseCount}>Up</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
            )
    }
}