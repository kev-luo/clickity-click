import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary widths={3}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='You Guessed'
          />
          <Menu.Item
            name='Top Score'
          />
        </Menu>
      </Segment>
    )
  }
}

