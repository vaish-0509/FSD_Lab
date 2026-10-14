function Contact({ profile }) {
  return (
    <section>
      <h2>Contact Me</h2>

      <p>
        Email:{" "}
        <a href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </p>

      <p>
        Phone:{" "}
        <a href={`tel:${profile.phone}`}>
          {profile.phone}
        </a>
      </p>
    </section>
  );
}

export default Contact;