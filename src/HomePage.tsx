import "./HomePage.css";
const HomePage = (props: any) => {
  const CMTOTAL = props.children;

  const currDomain = window.location.hostname;
  const domainParts = currDomain.split(".");
  console.log(currDomain);
  if (domainParts.length >= 3 && domainParts[0] == "whitepaper") {
    window.location.href = "https://zabra.gitbook.io/whitelistaio.gitbook.io/";
  }
  return (
    <>
      <div className="centerContainer">
        <div className="titleContainer">
          <h1 className="titleText">WHITELISTAIO</h1>
          <h3 className="secondaryText">Public Mint</h3>
        </div>
        <img src="wlgif.gif" alt="" className="wllogo" />
        <span className="mintPaused">MINT CLOSED</span>
        {/* {CMTOTAL} */}
        <div className="mediasContainer">
          <div className="media">
            <a href="https://discord.gg/gcwRnFc7" className="media" target="_blank">
              <img src="pixeldiscord.png" alt="discord" className="discordLogo logo" />
              <span className="mediaText">Discord</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/WhitelistAIO_" className="media" target="_blank">
              <img src="pixeltwitter.png" alt="twitter" className="twitterLogo logo" />
              <span className="mediaText">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
