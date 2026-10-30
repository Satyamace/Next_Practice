export default function Profile() {
  return (
    <div className="about">
      
      <div className="header">
        <p id="head">My Profile</p>
      </div>
      <div className="imgWrap">
        <div className="profilePic">
          <img src="/Images/ProfilePic.png" alt="Profile" />
          {/* <Image src={Profile} alt="profile" /> */}
        </div>
      </div>
      <div className="profile-text">
        <h1>Hello, I'm</h1>
        <h2>Satyam Kumar Trivedi</h2>
        <h3>Aspiring Software Developer</h3>
        <p>
          I am a BCA graduate passionate about web development and building
          interactive applications using JavaScript.
        </p>
      </div>
    </div>
  );
}


