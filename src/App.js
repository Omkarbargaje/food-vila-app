import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Form from "./components/Form";

const body = document.getElementsByTagName("body");

/*  
  Header
      -logo(title)
      -Nav
      -Cart
  
  Body
      -Search bar
      -RestrauntList
          -RestrauntCards(many cards)
              -Images
              -Name
              -Rating
              -Cusines

  Footer
        -Links
        -Copyright

*/

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Form/>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element into the root
root.render(<AppLayout />);
