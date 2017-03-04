import React, {Component} from 'react'
import {Link} from 'react-router';

export default class Navbar extends Component {
  render () {
    console.log(this.props)
    const categories = this.props.categories;
    return (
        <nav className ="navbar navbar-default">
          <div className ="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to='/products'>All</Link></li>
              {categories && categories.map((category) => {
                return <li key={category.id}><Link to="#">{category.name}</Link></li>
              })}
              </ul>
            </div>
        </nav>
    )
  }
}