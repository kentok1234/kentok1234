import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import githubIcon from "../assets/github.svg";

function Footer() {
  return (
    <footer>
      {/* <a href="#">
          <img src={twitterIcon} alt="Twitter" />
        </a> */}
      <a href="https://www.facebook.com/milda.a.putra.5" target="_blank">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/mildaaditia/" target="_blank">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://github.com/kentok1234" target="_blank">
        <img src={githubIcon} alt="Github" />
      </a>
    </footer>
  );
}

export default Footer;
