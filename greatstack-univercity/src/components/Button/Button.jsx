import "./Button.scss";

function Button({ children, href, primary, large, className }) {
    const Component = href ? "a" : "button";
    let classes = " btn";

    if (primary) {
        classes += " primary";
    } else if (large) {
        classes += " large";
    } 

    return (
        <Component
            href={href}
            className={className ? className + classes : classes}
        >
            {children}
        </Component>
    );
}

export default Button;
