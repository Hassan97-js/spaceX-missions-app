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
          <p className={`${styles["launch__patch--unavailable"]} alert-danger text-max-chars-45`}>Patch is unavailable</p>
        )}
      </div>

      <div className={styles["launch__info-wrapper"]}>
        <h3 className={`${styles["launch__heading"]} ${styles["launch__heading--h3"]}`}>About Mission</h3>

        <p className="text-max-chars-45">
          <span className={styles["launch__main-info"]}>Flight number:</span> {flightNumber}
        </p>

        <p className="text-max-chars-45">
          <span className={styles["launch__main-info"]}>Mission name:</span> {missionName}
        </p>

        <p className="text-max-chars-45">
          <span className={styles["launch__main-info"]}>Mission year:</span> {launchYear}
        </p>

        <div className={styles["launch__rocket"]}>
          <h3 className={`${styles["launch__heading"]} ${styles["launch__heading--h3"]}`}>About Rocket</h3>

          <p className="text-max-chars-45">
            <span className={styles["launch__about-rocket"]}>Rocket name:</span> {rocketName}
          </p>

          <p className="text-max-chars-45">
            <span className={styles["launch__about-rocket"]}>Rocket type:</span> {rocketType}
          </p>
        </div>

        <div className={styles["launch__site"]}>
          <h3 className={`${styles["launch__heading"]} ${styles["launch__heading--h3"]}`}>About Launch</h3>
          <p className="text-max-chars-45">
            <span className={styles["launch__about-site"]}>Launch site:</span> {siteName}
          </p>
        </div>

        <div className={styles["launch__about-rocket"]}>
          {!launchSuccess ? (
            <div className={styles["launch__failure-info"]}>
              <p className="danger failure-launch">Unsuccessful</p>

              <p className={`${styles["failure-times"]} text-max-chars-45`}>
                <span className={styles["about-launch"]}>Failure time:</span> Launch has failed at {launchFailureTimes + " seconds"}
              </p>

              <p className={`${styles["failure-reason"]} text-max-chars-45`}>
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
