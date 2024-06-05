
import './styles/App.css'
import UsernameDisplay from './components/UsernameDisplay';
import UsernameForm from './components/UsernameForm';
import Error from './components/Error';
import useUsername from './hooks/useUsername';


const App = () => {
  const { username, error, loading } = useUsername();


  if( error) {
    return <Error/>;
  }

  if( loading ) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <main>
      <div id='App'>
        <h1>Username Generator</h1>
        {username ? <UsernameDisplay/> : <UsernameForm/>}
      </div>
    </main>
  );
}


export default App;