
import profileImage from "../assets/profile.webp";

function ProfileImage({ name }) {
  return (
    <img
      src={profileImage}
      alt={name || "Profile"}
      className="profile-image"
    />
  );
}

export default ProfileImage;
