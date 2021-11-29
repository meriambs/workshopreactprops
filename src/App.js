import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'
import photo from './Profile/pointin.jpg'


function App() {
  return (
    <div className="App">
      <div>
        <Profile Fn="Ben Salah Meriam" Bio="mind your own bio" Profession="full stack instructor" >

          <img src={photo}  style={{width:"300px",height:"300px"}}/>
        </Profile>
      </div>

    </div>
  );
}

export default App;