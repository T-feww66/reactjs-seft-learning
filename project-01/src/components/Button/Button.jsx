import style from "./Button.module.css";
function Button({ small, medium, outline, value }) {
    const classes = {
        small: small ? style.small : "",
        medium: medium ? style.medium : "",
        outline: outline ? style.outline : "",
    };

    return (
        <button
            className={`${style.btn} ${classes.small} ${classes.medium} ${classes.outline}`}
        >
            {value}
        </button>
    );
}

export default Button;
