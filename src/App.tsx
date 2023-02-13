import './App.css';
// import { Button } from './components/Button';
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
// import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Box } from './components/context/Box';
import { User } from './components/context/User';
import { DOMRef } from './components/ref/DOMRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { Button } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

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

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <DOMRef />
      <MutableRef /> */}

      {/* <Counter message='The count value is' /> */}

      {/* <Private isLoggedIn={true} Component={Profile} /> */}

      {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={[
        { id: 1, name: 'Sang', email: 'example@abc.com' },
        { id: 2, name: 'Le', email: 'example@abc.com' },
        { id: 3, name: 'Li', email: 'example@abc.com' }
      ]} onClick={(item) => console.log(item)} /> */}

      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position='center' /> */}

      {/* <Button varient='primary' onClick={() => console.log('Clicked')}>
        My Button
      </Button> */}

      {/* <CustomComponent name='Thanh Sang' /> */}

      <Text as='h1' size='lg' color='primary'>Heading</Text>
      <Text as='p' size='sm' color='secondary'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='md' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
