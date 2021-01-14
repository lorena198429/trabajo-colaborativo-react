import { Fragment } from "react";
import JumbotronAPP from "./componentes/jumbotron";
import NavbarApp from "./componentes/navBar";
import AppCartas from "./componentes/appcartas";
import AppFooter from "./componentes/appfooter";



const App = () => {
    return (
        <Fragment>
            <NavbarApp />
            <div className="container">
                <JumbotronAPP
                    title={"A Warm Welcome"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc leo, molestie in nulla a, semper dignissim turpis. Ut fringilla."}
                    button={"Call to action"}
                />
                <div className="row text-center">
                    <div className="col-md-3">
                        <AppCartas
                            img={"http://placehold.it/500x325"}
                            titulo={"Card title"}
                            parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                            boton={"Go somewhere"} />
                    </div>
                    <div className="col-md-3">
                        <AppCartas
                            img={"http://placehold.it/500x325"}
                            titulo={"Card title"}
                            parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                            boton={"Go somewhere"} />
                    </div>
                    <div className="col-md-3">
                        <AppCartas
                            img={"http://placehold.it/500x325"}
                            titulo={"Card title"}
                            parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                            boton={"Go somewhere"} />
                    </div>
                    <div className="col-md-3">
                        <AppCartas
                            img={"http://placehold.it/500x325"}
                            titulo={"Card title"}
                            parrafo={"Some quick example text to build on the card title and make up the bulk of the card's content."}
                            boton={"Go somewhere"} />
                    </div>
                </div>
            </div>
            <AppFooter
                firma={"Copyright &copy; Your Website 2020"} />
        </Fragment>
    )
}


export default App;
