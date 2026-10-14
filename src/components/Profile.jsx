import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

import profileData from "../data/profileData";

function Profile() {
  return (
    <div className="profile-card">
      <ProfileHeader profile={profileData} />

      <ProfileDetails profile={profileData} />

      <About about={profileData.about} />

      <Skills />

      <Contact profile={profileData} />
    </div>
  );
}

export default Profile;