import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { LoggedIn } from './components/state/LoggedIn';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
// import { User } from './components/state/User';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Box } from './components/context/Box';
import { User } from './components/context/User';

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
      {/* <Status status='loading' /> */}

      {/* Parsing Props As A Children Component */}
      {/* <Oscar>
        <Heading>This is my heading inside Oscar Component.</Heading>
      </Oscar> */}

      {/* Parsing Props As An Optional Props */}
      {/* <Greet name='Sang' isLoggedIn={true} /> */}

      {/* <Heading>Tracking Input and Button Event In Console Log</Heading>

      <Input value='' handleOnChange={(event) => {
        console.log(event)
      }} />

      <Button handleOnClick={ (event, id) => {
        console.log('Clicked!', event, id);
      }} /> */}

      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}

      {/* <Heading>UseState Hook</Heading>
      <LoggedIn /> */}

      {/* <Heading>UseState Hook Feature Value</Heading>
      <User /> */}

      {/* <Heading>UseReducer Hook</Heading>
      <Counter /> */}

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
