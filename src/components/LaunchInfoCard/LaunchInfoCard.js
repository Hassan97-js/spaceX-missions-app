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
    <div className={styles["launch-info-card"]} key={uuid}>
      <div className={styles["image-wrapper"]}>
        {missionPatch ? (
          <img className={styles["spaceX-image"]} src={missionPatch} alt="SpaceX mission patch img" />
        ) : (
          <p className={`${styles["image-not-available"]} alert-danger`}>Image is not available</p>
        )}
      </div>
      <div className={styles["launch-information-wrapper"]}>
        <h3 className={styles["about-launch-heading-h3"]}>About Mission</h3>
        <p>
          <span className={`${styles["about-launch-flight-number"]} ${styles["about-launch"]}`}>Flight number:</span> {flightNumber}
        </p>
        <p>
          <span className={`${styles["about-launch-mission-name"]} ${styles["about-launch"]}`}>Mission name:</span> {missionName}
        </p>
        <p>
          <span className={`${styles["about-launch-mission-year"]} ${styles["about-launch"]}`}>Mission year:</span> {launchYear}
        </p>
        <div className={styles.rockets}>
          <h3 className={styles["rockets-heading-h3"]}>About Rocket</h3>
          <p>
            <span className={styles["about-rocket"]}>Rocket name:</span> {rocketName}
          </p>
          <p>
            <span className={styles["about-rocket"]}>Rocket type:</span> {rocketType}
          </p>
        </div>
        <div className={styles["launch-site"]}>
          <h3 className={styles["launch-site-heading-h3"]}>About Launch</h3>
          <p>
            <span className={styles["about-launch-site"]}>Launch site:</span> {siteName}
          </p>
        </div>
        <div className={styles["launch-info"]}>
          {!launchSuccess ? (
            <div className={styles["launch-failure-info"]}>
              <p className="failure failure-launch">Unsuccessful</p>

              <p className={styles["failure-times"]}>
                <span className={styles["about-launch"]}>Failure time:</span> Launch has failed at {launchFailureTimes + " seconds"}
              </p>

              <p className={styles["failure-reason"]}>
                <span className={styles["about-launch"]}>Launch failure reason: </span> {capitalizeFirstLetter(launchFailureReason)}
              </p>
            </div>
          ) : (
            <p className={`success ${styles["success-launch"]}`}>{launchSuccess} Successful</p>
          )}

          <Link className={`${styles["launch-info-link"]} ${styles["learn-more"]}`} to={`launchMoreInfo/${launchNumId}`}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaunchInfoCard;
