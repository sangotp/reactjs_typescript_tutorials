import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Le',
    last: 'Sang',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    }
  ]

  return (
    <div className="App">
      {/* <Greet name='Sang' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      
      {/* Parsing Props As A Union Of String Literals - To Catch Error When Status Is Not Defined */}
      <Status status='loading' />

      {/* Parsing Props As A Children Component */}
      <Oscar>
        <Heading>This is my heading inside Oscar Component.</Heading>
      </Oscar>

      {/* Parsing Props As An Optional Props */}
      <Greet name='Sang' isLoggedIn={true} />
    </div>
  );
}

export default App;
