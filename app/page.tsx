import Profile from "@/components/Profile";
import ProfilePic from "@/components/ProfilePic";
export default function Home() {
  return (
    <div>
      <Profile />
      <ProfilePic />
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
