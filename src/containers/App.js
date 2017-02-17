import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
// import { Link } from 'react-router'
import Navigation from '../components/Navigation'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { setYear, setPage } = this.props.pageActions
    const navList = [ 'главная', 'Скачать дкп', 'Заполнить онлайн', 'Образец дкп', 'Акт приёза-передачи', 'Правила продажи', 'Новости', 'Госпошлины', 'Контакты' ]
    return (
      <div>
        <User
          name={user.name}
        />
        <Page
          year={page.year}
          photos={page.photos}
          setYear={setYear}
        />
        <Navigation
          pageNumber={page.page}
          setPage={setPage}
          navList={navList}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
