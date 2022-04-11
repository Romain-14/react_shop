import React, { Component } from 'react'

class Loading extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
    }

    componentWillUnmount(){
        console.log('unmounted', this.props);
        clearTimeout(this.props.timer);
    }

    
  render() {
    return (
        <>
        {
            this.props.items.length > 0 &&
            <div>One moment plz wesh</div>
        }
        
        </>
    )
  }
}

export default Loading