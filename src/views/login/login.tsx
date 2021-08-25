import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { add } from '../../redux/actions/login'

type Props = {
    add : any,
    count: number
}
class login extends Component<Props> {
    add = () => {
        this.props.add(1)
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.add}>添加</Button>
                <div>数字{ this.props.count }</div>
            </div>
        )
    }
}
type State = {
    login : any
}
export default connect(
    (state: State) => ({
        count: state.login
    }),
    {add}
)(login)