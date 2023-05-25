import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home = () => {
  const credentials = useSelector((state: RootState) => state.user.credentials);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {credentials && (
        <p>
          You are logged in as <strong>{credentials.username}</strong>.
        </p>
      )}
    </div>
  );
};

export default Home;
