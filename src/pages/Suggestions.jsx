import { useLogout } from '../features/authentication/useLogout';

function Suggestions() {
  const { logout } = useLogout();

  return (
    <div>
      <h1>Suggestions</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Suggestions;
