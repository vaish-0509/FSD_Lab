function ProfileDetails({ profile }) {
  return (
    <section>
      <h2>Personal Details</h2>

      <p>
        <strong>Email:</strong> {profile.email}
      </p>

      <p>
        <strong>Phone:</strong> {profile.phone}
      </p>

      <p>
        <strong>Location:</strong> {profile.location}
      </p>
    </section>
  );
}

export default ProfileDetails;