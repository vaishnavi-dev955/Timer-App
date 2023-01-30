import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {Date: new Date()}
  }

  componentDidMount() {
    console.log('componentDidMount is called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentwillUnmount has called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({
      Date: new Date(),
    })
  }

  render() {
    const {Date} = this.state
    console.log(Date)

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{Date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
