import PropTypes from 'prop-types';


const AppFooter = (props) => {
    return (
        <footer className="py-5 bg-dark ">
            <div className="container col-lg-3 col-md-6 mb-4"></div>
            <div className="container">
    <p className="m-0 text-center text-white">{props.firma}</p>
            </div>

        </footer>


    )
}

AppFooter.propTypes = {
    firma: PropTypes.string,
    

}
export default AppFooter;