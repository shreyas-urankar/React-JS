import UserCard from "./components/UserCard"
import newpic from "./assets/newpic.jpg"
import Maharana from "./assets/maharana.jpg"
import Prithviraj from "./assets/prithviraj.jpg"

function App() {

  return (
    <div className="container">
      <UserCard name='Shreyas Rana' desc='desc1' image={newpic} style={{"border-radius":"10px"}}/>
      <UserCard name='Maharana Pratap' desc='desc2' image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name='Prithviraj Chauhan' desc='desc3' image={Prithviraj} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
