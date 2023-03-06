let constButton;
const Button = () => (
    constButton = (props) => {
        const {label, color, onClick} = props;

            <buttontype = "text"
        className = "btn"
        style = {
        {
            backgroundColor: color
        }
    }
        onClick = {onClick} > {label}
    </button>

    };
);

export default Button;

