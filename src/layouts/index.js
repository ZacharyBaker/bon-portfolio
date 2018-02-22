import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Bonnie Story Official Site"
      meta={[
        { name: 'description', content: 'Sample' }, //TODO: SEO
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        padding: '0px 0rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

