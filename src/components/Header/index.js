import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Bonnie Story
        </Link>
      </h1>
      <ul
        style={{
          float: 'right',
          display: 'flex'
        }}
      >
        <li
          style={{
            marginLeft: '30px'
          }}
        >
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
          Home
          </Link>
        </li>
        <li
          style={{
            marginLeft: '30px'
          }}
        >
          <Link
            to="/page-2/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
          Page 2
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
