import ReactShare from "react-share-simplified";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ReactShare
        url="https://ee.humanitarianresponse.info/i/a5tPFS2q"
        title="Survey of Industry's Preparedness for Tourism Recovery"
        facebook={true} // true or false
        facebookClass="iconStyle" //className to Style share button
        googlePlus={true} // true or false
        googlePlusClass="iconStyle"
        twitter={true} // true or false
        twitterClass="iconStyle"
        email={true} // true or false
        emailClass="iconStyle"
        whatsapp={true} // true or false
        whatsappClass="iconStyle"
        iconSize={32} // Icon size
        addClass="styling-className" //add className to style the whole div
      />
    </div>
  );
}

export default App;
