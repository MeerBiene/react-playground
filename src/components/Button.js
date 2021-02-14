import './Button.css';

const Button = ({ color, text }) => {
    return (
        <div>
            <button style={{ backgroundColor: color }} className='btn'>
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Submit'
}

export default Button;