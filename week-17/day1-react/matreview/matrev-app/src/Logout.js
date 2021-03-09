import './Logout.css';

export default function Logout(props) {
  const { user } = props;

  return (
    <div className="logout">
      <img src={user.photoURL} alt={user.displayName} title={user.displayName} />
      <span>{ user && `Bejelentkezve, mint ${user.displayName}` }</span>
    </div>
  );
}