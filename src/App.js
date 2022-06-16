import './styles/App.css';
import Header from './componants/Header'
import Body from './componants/Body'
import Footer from './componants/Footer'




let usersData = require('./data/users.json'),
 currentUser = usersData[usersData.activeUser],
 showingUser = usersData[usersData.showingUser]

const App = () => (
  <div className="App">
    <Header users = {usersData} />
    <Body showingUser={showingUser} currentUser={currentUser} />
    <Footer currentUser={currentUser}/>
  </div>
  );

export default App


