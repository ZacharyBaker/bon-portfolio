import React from 'react'
import Link from 'gatsby-link'
import s from './page-2.module.css'


class SecondPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }


  render() {
    return (
      <div>
        <h1>Hi from the second page</h1>
        <p>Bon is still cool here too.</p>
        <div className={s.counter}>
          <h2>Counter: {this.state.counter}</h2>
          <button onClick={this.increment.bind(this)}>+</button>
          <button onClick={this.decrement.bind(this)}>-</button>
        </div>
      </div>
    )
  }
}


export default SecondPage
