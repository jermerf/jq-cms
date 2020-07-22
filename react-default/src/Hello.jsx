import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class Hello extends Component {

  render() {
    return (
      <div>
        Hello World!
        <Button variant="contained" color="primary">I am so Clickable!</Button>
      </div>
    )
  }
}
