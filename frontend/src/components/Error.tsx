import {FC} from 'react';
import useUsername from '../hooks/useUsername';
import '../styles/Error.css';

// Error component to display error message and refresh button
const Error: FC = () => {
  const {error, resetUsername} = useUsername();

  return (
    <div id="errorComponent">
      <p>{error}</p>
      <button onClick={resetUsername}>Refresh</button>
    </div>
  );
}


export default Error