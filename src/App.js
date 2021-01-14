import AppFooter from "./componentes/appfooter"
import AppCartas from "./componentes/appcartas"
import { Fragment } from "react";


function App() {
    return (
        <Fragment>
            <div className="container">
                <div className="row text-center">
                        <div className="col-md-3">
                            <AppCartas
                                img={"http://placehold.it/500x325"}
                                titulo={"Card title"}
                                parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                                boton={"Go somewhere"}/>
                            </div>
                        <div className="col-md-3">
                            <AppCartas
                                img={"http://placehold.it/500x325"}
                                titulo={"Card title"}
                                parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                                boton={"Go somewhere"}/>
                        </div>
                        <div className="col-md-3">
                            <AppCartas
                                img={"http://placehold.it/500x325"}
                                titulo={"Card title"}
                                parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                                boton={"Go somewhere"}/>
                        </div>
                        <div className="col-md-3">
                            <AppCartas
                                img={"http://placehold.it/500x325"}
                                titulo={"Card title"}
                                parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                                boton={"Go somewhere"}/>
                        </div>
                    </div>
                </div>
            <AppFooter
                firma={"Copyright &copy; Your Website 2020"}/>
        </Fragment>

    )
}




export default App;

