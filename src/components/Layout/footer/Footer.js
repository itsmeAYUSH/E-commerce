import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.title}>The Generics</div>
      <div className={classes.icons}>
        <ul>
          <li>
            <a href="https://www.facebook.com/home.php">
              <img src="/images/Icons/facebook.png" alt="icon"></img>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/">
              <img src="/images/Icons/spotify.png" alt="icon"></img>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src="/images/Icons/youtube.png" alt="icon"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
