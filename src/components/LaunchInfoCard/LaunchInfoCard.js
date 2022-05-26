import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { capitalizeFirstLetter } from "../../utils/functions";

import styles from "./launchInfoCard.module.scss";

function LaunchInfoCard({
  launchNumId,
  missionPatch,
  flightNumber,
  missionName,
  launchYear,
  rocketName,
  rocketType,
  siteName,
  launchFailureTimes,
  launchFailureReason,
  launchSuccess
}) {
  const uuid = uuidv4();

  return (
    <div className={styles.launch} key={uuid}>
      <div className={styles["launch__patch-wrapper"]}>
        {missionPatch ? (
          <img className={styles["launch__patch"]} src={missionPatch} alt="SpaceX mission patch img" />
        ) : (
          <p className={`alert danger ${styles["launch__patch--unavailable"]}`}>Patch is unavailable</p>
        )}
      </div>

      <div className={styles["launch__info-wrapper"]}>
        <div>
          <h3>About Mission</h3>

          <p className="text-max-chars-45">
            <span>Flight number:</span> {flightNumber}
          </p>

          <p className="text-max-chars-45">
            <span>Mission name:</span> {missionName}
          </p>

          <p className="text-max-chars-45">
            <span>Mission year:</span> {launchYear}
          </p>
        </div>

        <div>
          <h3>About Rocket</h3>

          <p className="text-max-chars-45">
            <span>Rocket name:</span> {rocketName}
          </p>

          <p className="text-max-chars-45">
            <span>Rocket type:</span> {rocketType}
          </p>
        </div>

        <div>
          <h3>About Launch</h3>

          <p className="text-max-chars-45">
            <span>Launch site:</span> {siteName}
          </p>
        </div>

        <div className={styles["launch__about-launch"]}>
          {!launchSuccess ? (
            <div>
              <p className={`alert danger ${styles["launch--unsuccessful"]}`}>Unsuccessful</p>

              <p className="text-max-chars-45">
                <span>Failure time:</span> Launch has failed at {launchFailureTimes + " seconds"}
              </p>

              <p className="text-max-chars-45">
                <span>Launch failure reason: </span> {capitalizeFirstLetter(launchFailureReason)}
              </p>
            </div>
          ) : (
            <p className={`alert success ${styles["launch--successful"]}`}>{launchSuccess} Successful</p>
          )}

          <Link className={`${styles["launch__link--learn-more"]} spacex-link learn-more`} to={`launchMoreInfo/${launchNumId}`}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaunchInfoCard;
