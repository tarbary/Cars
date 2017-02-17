import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import React, { Component } from 'react'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      pageName: this.props.navList
    }
    this.setPage = this.setPage.bind(this)
  }
  setPage(pageNumber) {
    this.setState({
      page: pageNumber
    })
  }
  render() {
    return <div style={{ width: '20%', float: 'left' }}>
      <Nav bsStyle="pills" stacked activeKey={this.state.page}>
        {
          this.state.pageName.map((item) =>
            <Link to={'/Skachat'}>
              <NavItem
                eventKey={this.state.pageName.indexOf(item)+1}
                id={this.state.pageName.indexOf(item)+1}
                onClick={(e) => this.setPage(parseInt(e.target.id))}
              >
                {item}
              </NavItem>
            </Link>
          )
        }
      </Nav>
    </div>
  }
}
