import React, { Component } from 'react'
import { connect } from 'react-redux'

type Props = {
    count: number
}
class test extends Component<Props> {

    componentDidMount() {
        console.log('this.props', this.props);
        
    }
    render() {
        return (
            <div>
                添加{this.props.count}
            </div>
        )
    }
}
 
export default connect(
    (state: any) => ({
        count: state.login
    })
)(test)

