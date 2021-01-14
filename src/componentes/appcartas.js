import PropTypes from 'prop-types';


const AppCartas = (props) => {
    return (
        <div className="card cardStyle" >
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.parrafo}</p>
    <a href="#" className="btn btn-primary">{props.boton}</a>
            </div>
        </div>
    )
}

AppCartas.propTypes = {
    img: PropTypes.string,
    titulo: PropTypes.string,
    parrafo: PropTypes.string,
    boton: PropTypes.string,

}
export default AppCartas;