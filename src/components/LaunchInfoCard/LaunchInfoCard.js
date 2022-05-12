import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { capitalizeFirstLetter } from "../../utils/functions";

import "./launchInfoCard.css";

function LaunchInfoCard({
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
    <div className="launch-info-card" key={uuid}>
      <div className="image-wrapper">
        {missionPatch ? <img className="spaceX-image" src={missionPatch} alt="SpaceX mission patch img" /> : <p className="danger-alert">Image is not available</p>}
      </div>
      <div className="launch-information-wrapper">
        <h3>About Mission</h3>
        <p>
          <span className="about-launch">Flight number:</span> {flightNumber}
        </p>
        <p>
          <span className="about-launch">Mission name:</span> {missionName}
        </p>
        <p>
          <span className="about-launch">Mission year:</span> {launchYear}
        </p>
        <div className="rockets">
          <h3>About Rocket</h3>
          <p>
            <span className="about-launch">Rocket name:</span> {rocketName}
          </p>
          <p>
            <span className="about-launch">Rocket type:</span> {rocketType}
          </p>
        </div>
        <div className="launch-site">
          <h3>About Launch</h3>
          <p>
            <span className="about-launch">Launch site:</span> {siteName}
          </p>
        </div>
        <div className="launch-info">
          {launchFailureDetails ? (
            <div className="launch-failure-info">
              <p className="failure-launch">Unsuccessful</p>
              <p className="failure-times">
                <span className="about-launch">Failure time:</span> Launch has failed at {launchFailureTimes + " seconds"}
              </p>
              <p className="failure-reason">
                <span className="about-launch"> Launch failure reason: </span> {capitalizeFirstLetter(launchFailureReason)}
              </p>
            </div>
          ) : (
            <p className="success-launch">{launchSuccess} Successful</p>
          )}

          <Link className="launch-info-link learn-more" to={`launchMoreInfo/${launchNumId}`}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaunchInfoCard;
