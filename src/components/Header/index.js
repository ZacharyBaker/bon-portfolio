import React from 'react'
import Link from 'gatsby-link'
import s from './header.module.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: [
        {
          name: 'Home',
          slug: '/'
        },
        {
          name: 'Page 2',
          slug: '/page-2/'
        }
      ]
    }
  }

  render() {
    let activePage = null;
    if (typeof window !== 'undefined') {
      activePage = window.location.pathname;
    }

    return (
      <div className={s.wrap}>
        <div className={s.inner}>
          <h1 className={s.title}>
            <Link to="/" className={s.link}>
              bonnie story
            </Link>
          </h1>

          <ul className={s.nav}>
            {this.state.navItems.map(item => {
              return (
                <li className={s.li} key={item.slug}>
                  <Link to={item.slug} className={`${s.link} ${activePage === item.slug ? s.activeItem : ''}`}>
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
