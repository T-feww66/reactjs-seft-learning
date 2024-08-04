import "./Title.scss"

function Title({sub_title, title}) {
    return (
        <div className="title">
            <p className="title__sub">{sub_title}</p>
            <h2 className="title__heading">{title}</h2>
        </div>
    );
}

export default Title;
