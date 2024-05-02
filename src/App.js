import "./App.css";
import Avatar from "./assets/images/avatar-jessica.jpeg";

function App() {
  return (
    <div className="container">
      <div className="social-media-card">
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <span className="name">Jessica Randall</span>
        <span className="place">London, United Kingdom</span>
        <p className="description">"Front-end developer and avid reader."</p>
        <div className="button-section">
          <button>GitHub</button>
          <button> Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default App;
