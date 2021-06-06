import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { CapitalizeFirstLetter } from "../../utils/Functions";

import "./LaunchDetails.css";

function LaunchDetails({
  launchNumId,
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
  launchSuccess
}) {
  const uuid = uuidv4();
  return (
    <div id="mission" key={uuid}>
      <div className="image-wrapper">
        {missionPatch ? (
          <img className="spaceXimage" src={missionPatch} alt="SpaceX mission patch img" />
        ) : (
          <p className="danger-alert">Image is not available</p>
        )}
      </div>
      <div className="information-wrapper">
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

          <Link className="learn-more d-block" to={`launchMoreInfo/${launchNumId}`}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaunchDetails;
