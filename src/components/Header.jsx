import PropTypes from 'prop-types'


function Header(props) {
  return (
    <header>
        <div className="container"></div>
        <h2>{props.text}</h2>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string.isRequired
} // no need when us TS, this makes code more robust!

export default Header