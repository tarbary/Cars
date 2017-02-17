import React, { PropTypes, Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Page extends Component {
	onYearBtnClick(e) {
		this.props.setYear(+e.target.innerText)
	}
  render() {
    const { year, photos } = this.props
    return <div>
			<p>
				<Button bsStyle="danger" onClick={::this.onYearBtnClick}>2016</Button>
				<Button onClick={::this.onYearBtnClick}>2015</Button>
				<Button onClick={::this.onYearBtnClick}>2014</Button>
			</p>
			<h3>{year} year!</h3>
      <p>У тебя {photos.length} фото.</p>
    </div>
  }
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	setYear: PropTypes.func.isRequired
}
