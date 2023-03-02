import profileImage from "../assets/me.jpg";

function Image() {
  return (
    <div className="image__container">
      <img src={profileImage} alt="Profile Image" width="100%" height="100%" />
    </div>
  );
}

export default Image;
