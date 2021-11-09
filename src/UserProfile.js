import "./UserProfile.css";

function UserProfile({ name, email }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <h3>
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
    </div>
  );
}

export default UserProfile;
