import './App.css';
import MyButton from './MyButton';

const user = {
  name: "Namit",
  profileImage: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
  width: 100
}

function App() {
  return (
    <>
      <div>
        <h1>Hello {user.name}</h1>
        <img className="avatar"
          src={user.profileImage}
          alt="profile"
          style={{
            width: user.width,
            height: user.height
          }}
        />
      </div>
      <div className="App">
        <MyButton />
      </div>
    </>
  );
}

export default App;
