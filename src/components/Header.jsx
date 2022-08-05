import PropTypes from 'prop-types'


function Header(props) {
  return (
    <header>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
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