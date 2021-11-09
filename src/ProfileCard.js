import "./ProfileCard.css";

import Avatar from "./Avatar";
import UserProfile from "./UserProfile";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <Avatar src={user.avatar} alt={user.first_name} />
      <UserProfile name={user.first_name} email={user.email} />
    </div>
  );
}

export default ProfileCard;
