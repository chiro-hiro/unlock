import React from 'react'
import PropTypes from 'prop-types'

const SvgEtherscan = ({ title, ...props }) => (
  <svg {...props}>
    <title>{title}</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6.5A1.5 1.5 0 0 1 6.5 5H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 0-.5.5v2.25a.5.5 0 0 1-1 0V6.5zm9.5-1A.5.5 0 0 1 15 5h2.5A1.5 1.5 0 0 1 19 6.5v2.25a.5.5 0 0 1-1 0V6.5a.5.5 0 0 0-.5-.5H15a.5.5 0 0 1-.5-.5zM8.5 8a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM12 9a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V9zm3.5-1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-10 6.75a.5.5 0 0 1 .5.5v2.25a.5.5 0 0 0 .5.5H9a.5.5 0 0 1 0 1H6.5A1.5 1.5 0 0 1 5 17.5v-2.25a.5.5 0 0 1 .5-.5zm13 0a.5.5 0 0 1 .5.5v2.25a1.5 1.5 0 0 1-1.5 1.5H15a.5.5 0 0 1 0-1h2.5a.5.5 0 0 0 .5-.5v-2.25a.5.5 0 0 1 .5-.5z"
    />
  </svg>
)

SvgEtherscan.propTypes = {
  title: PropTypes.string,
}
SvgEtherscan.defaultProps = {
  title: '',
}
export default SvgEtherscan
