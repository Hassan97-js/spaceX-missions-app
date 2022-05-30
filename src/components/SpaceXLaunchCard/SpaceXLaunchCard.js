import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/* import { capitalizeFirstLetter } from "../../utils/functions"; */

import styles from "./spaceXLaunchCard.module.scss";

function SpaceXLaunchCard({ launchNumId, missionPatch, flightNumber, missionName, launchYear, rocketName, rocketType, siteName, launchSuccess }) {
  const uuid = uuidv4();

  return (
    <div className={styles.launch} key={uuid}>
      <div className={`mb-5 ${styles["launch__patch-wrapper"]}`}>
        {missionPatch ? (
          <img className={styles["launch__patch"]} src={missionPatch} alt="SpaceX mission patch img" />
        ) : (
          <p className={`alert danger ${styles["launch__patch--unavailable"]}`}>Patch is unavailable</p>
        )}
      </div>

      <div>
        <div>
          <h3>About Mission</h3>

          <p className="max-ch-45 mt-1">
            <span>Flight number:</span> {flightNumber}
          </p>

          <p className="max-ch-45 mt-1">
            <span>Mission name:</span> {missionName}
          </p>

          <p className="max-ch-45 mt-1">
            <span>Mission year:</span> {launchYear}
          </p>
        </div>

        <div className="mt-2">
          <h3>About Rocket</h3>

          <p className="max-ch-45 mt-1">
            <span>Rocket name:</span> {rocketName}
          </p>

          <p className="max-ch-45 mt-1">
            <span>Rocket type:</span> {rocketType}
          </p>
        </div>

        <div className="mt-2">
          <h3>About Launch</h3>

          <p className="max-ch-45 mt-1">
            <span>Launch site:</span> {siteName}
          </p>
        </div>

        <div className="mt-2">
          {launchSuccess ? (
            <p className={`alert success ${styles["launch--successful"]}`}>{launchSuccess} Successful</p>
          ) : (
            <p className={`alert danger ${styles["launch--unsuccessful"]}`}>Unsuccessful</p>
          )}

          <Link className={`${styles["launch__link--learn-more"]} spacex-link learn-more mx-auto mt-5`} to={`launchMoreInfo/${launchNumId}`}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpaceXLaunchCard;
