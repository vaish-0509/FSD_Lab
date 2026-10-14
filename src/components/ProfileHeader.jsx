import ProfileImage from "./ProfileImage";

function ProfileHeader({ profile }) {
  return (
    <div className="profile-header">
      <ProfileImage
        image={profile.image}
        name={profile.name}
      />

      <h1>{profile.name}</h1>
      <h3>{profile.role}</h3>
    </div>
  );
}

export default ProfileHeader;