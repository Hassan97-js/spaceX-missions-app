import "./LaunchDetails.css";
import { CapitalizeFirstLetter } from "../../utils/Functions";

import { v4 as uuidv4 } from "uuid";

function LaunchDetails({
  missionPatch,
  flightNumber,
  missionName,
  launchYear,
  rocketName,
  rocketType,
  siteName,
  launchFailureDetails,
  launchFailureTimes,
  launchFailureReason,
  launchSuccess,
  launchDetailsInfo,
  launchYoutube
}) {
  const uuid = uuidv4();
  return (
    <div id="mission" key={uuid}>
      <div id="image-wrapper">
        {missionPatch ? <img id="spaceXimage" src={missionPatch} alt="SpaceX mission patch img" /> : <p className="danger-alert">Image is not available</p>}
      </div>
      <div id="information-wrapper">
        <h2>About Mission</h2>

        <p>
          <span className="highlight-text">Flight number:</span> {flightNumber}
        </p>
        <p>
          <span className="highlight-text">Mission name:</span> {missionName}
        </p>
        <p>
          {" "}
          <span className="highlight-text">Mission year:</span> {launchYear}
        </p>
        <div id="rockets">
          <h2>About Rocket</h2>
          <p>
            {" "}
            <span className="highlight-text">Rocket name:</span> {rocketName}
          </p>
          <p>
            {" "}
            <span className="highlight-text">Rocket type:</span> {rocketType}
          </p>
        </div>
        <div id="launch-site">
          <h2>About Launch</h2>
          <p>
            {" "}
            <span className="highlight-text">Launch site:</span> {siteName}
          </p>
        </div>
        <div id="launch-details">
          {launchFailureDetails ? (
            <div className="launch-failure-details">
              <p className="failure-launch">Launch is unsuccessful</p>
              <p className="failure-times">
                <span className="highlight-text">Failure time:</span> Launch has failed at {launchFailureTimes + " seconds"}
              </p>
              <p className="failure-reason">
                <span className="highlight-text"> Launch failure reason: </span> {CapitalizeFirstLetter(launchFailureReason)}
              </p>
            </div>
          ) : (
            <p className="success-launch">{launchSuccess} Launch is successful</p>
          )}
          <h2>Launch Details</h2>
          {launchDetailsInfo ? <p className="launch-details">{launchDetailsInfo}</p> : <p className="danger-alert">Launch details is not available</p>}
          <h2>Watch the Launch on Youtube</h2>
          {launchYoutube ? (
            <a className="youtube-link d-block" href={launchYoutube} target="#">
              Watch on Youtube
            </a>
          ) : (
            <p className="danger-alert">Launch video is not available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LaunchDetails;
