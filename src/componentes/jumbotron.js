import PropTypes from 'prop-types';

const JumbotronAPP = (props) => {
    return (
        <div className="container w-75 ">
            <div className="jumbotron ">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.text}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">{props.button}</a>
            </div>
        </div>
    )
};

JumbotronAPP.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.string
}

export default JumbotronAPP;