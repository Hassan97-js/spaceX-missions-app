import { useContext } from "react";
import { useParams } from "react-router-dom";

import GlobalContext from "../../stateContext/globalContext";

import { filterLaunch, capitalizeFirstLetter } from "../../utils/functions";

import styles from "./launchMoreInfoPage.module.scss";

function LaunchMoreInfoPage() {
  const { globalSpaceXLaunches } = useContext(GlobalContext);
  const { id } = useParams();

  const matchedLaunch = globalSpaceXLaunches && filterLaunch(globalSpaceXLaunches, id);

  return (
    matchedLaunch && (
      <div className={`${styles["launch-more-info-page"]} container`}>
        <div className={styles["learn-more-image-wrapper"]}>
          {matchedLaunch[0].links.mission_patch ? (
            <img className={styles["spaceX-img"]} src={matchedLaunch[0].links.mission_patch} alt="SpaceX mission patch img" />
          ) : (
            matchedLaunch[0].links.mission_patch === null && <p className={styles["alert-danger"]}>Image is not available</p>
          )}
        </div>

        <div className={styles["learn-more-information-wrapper"]}>
          <h2 className={styles["learn-more-heading-h2"]}>About Mission</h2>

          <p>
            <span className={styles["launch-flight-number"]}>Flight number:</span> {matchedLaunch[0].flight_number}
          </p>

          <p>
            <span className={styles["launch-mission-name"]}>Mission name:</span> {matchedLaunch[0].mission_name}
          </p>

          <p>
            <span className={styles["launch-mission-year"]}>Mission year:</span> {matchedLaunch[0].launch_year}
          </p>

          <div className={styles["rocket-info-wrapper"]}>
            <h2 className="rocket-info-heading-h2">About Rocket</h2>
            <p className={styles["rocket-name-text"]}>
              <span className={styles["rocket-name"]}>Rocket name:</span> {matchedLaunch[0].rocket.rocket_name}
            </p>

            <p className={styles["rocket-type-text"]}>
              <span className={styles["rocket-type"]}>Rocket type:</span> {matchedLaunch[0].rocket.rocket_type}
            </p>
          </div>

          <div className={styles["launch-site"]}>
            <h2 className="launch-site-info-heading-h2">About Launch</h2>

            <p className={styles["launch-site-text"]}>
              <span className={styles["launch-site"]}>Launch site:</span> {matchedLaunch[0].launch_site.site_name_long}
            </p>
          </div>

          <div className={styles["launch-details"]}>
            {!matchedLaunch[0].launch_success ? (
              <div className={styles["launch-failure-details"]}>
                <p className="alert danger">Unsuccessful</p>

                <p className={styles["failure-times-text"]}>
                  <span className={styles["failure-time"]}>Failure time:</span> Launch has failed at {matchedLaunch[0].launch_failure_details.time + " seconds"}
                </p>

                <p className={styles["failure-reason-text"]}>
                  <span className={styles["failure-reason"]}>Launch failure reason: </span>
                  {capitalizeFirstLetter(matchedLaunch[0].launch_failure_details.reason)}
                </p>
              </div>
            ) : (
              <p className="alert success">{matchedLaunch[0].launchSuccess}Successful</p>
            )}

            <h2>Launch Details</h2>

            {matchedLaunch[0].details ? (
              <p className={styles["launch-details"]}>{matchedLaunch[0].details}</p>
            ) : (
              <p className={styles["alert-danger"]}>Launch details is not available</p>
            )}

            <h3 className={styles["watch-launch-heading-h3"]}>Watch the Launch on Youtube</h3>

            {matchedLaunch[0].links.video_link ? (
              <a className={`${styles["launch-info-link"]} ${styles["youtube-link"]}`} href={matchedLaunch[0].links.video_link} target="#">
                Watch on Youtube
              </a>
            ) : (
              <p className={styles["alert-danger"]}>Launch video is not available</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default LaunchMoreInfoPage;
