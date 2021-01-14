import { Fragment } from "react";
import JumbotronAPP from "./componentes/jumbotron";
import NavbarApp from "./componentes/navBar";



const App = () => {
    return (
        <Fragment>
        <NavbarApp />
        <JumbotronAPP
            title={"A Warm Welcome"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc leo, molestie in nulla a, semper dignissim turpis. Ut fringilla."}
            button={"Call to action"}
        />
        </Fragment>
    )
}


export default App;
