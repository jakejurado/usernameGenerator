import '../styles/UsernameDisplay.css';
import useUsername from '../hooks/useUsername';


// UsernameDisplay component to display username and refresh button
const UsernameDisplay = () => {
  const { username, resetUsername } = useUsername();
  return (
    <>
      <div id='display'>
        <h2>{username}</h2>
      </div>
      <button id='button' onClick={resetUsername}>Refresh</button>
    </> 
  )
};


export default UsernameDisplay;