import { useContext } from "react";
import { useParams } from "react-router-dom";

import GlobalContext from "../../stateContext/globalContext";

import { filterLaunch, capitalizeFirstLetter } from "../../utils/functions";

import styles from "./launchMoreInfoPage.module.scss";

function LaunchMoreInfoPage() {
  const { globalSpaceXLaunches } = useContext(GlobalContext);
  const { id } = useParams();

  const matchedLaunch = globalSpaceXLaunches && filterLaunch(globalSpaceXLaunches, id);

  /* const failureDetails = matchedLaunch && checkFailureDetails(matchedLaunch[0].launch_failure_details).isLaunchFailureDetails;
  const failureTimes = matchedLaunch && checkFailureDetails(matchedLaunch[0].launch_failure_details).isLaunchFailureTimes;
  const failureReason = matchedLaunch && checkFailureDetails(matchedLaunch[0].launch_failure_details).isLaunchFailureReason;
 */
  return (
    matchedLaunch && (
      <div className={styles["launch-more-info-page"]}>
        <div className={styles["learn-more-image-wrapper"]}>
          {matchedLaunch && matchedLaunch[0].links.mission_patch ? (
            <img className={styles["spaceX-img-big"]} src={matchedLaunch[0].links.mission_patch} alt="SpaceX mission patch img" />
          ) : (
            matchedLaunch && matchedLaunch[0].links.mission_patch === null && <p className={styles["alert-danger"]}>Image is not available</p>
          )}
        </div>

        <div className={styles["learn-more-information-wrapper"]}>
          <h2 className={styles["about-launch-heading--h2"]}>About Mission</h2>
          <p>
            <span className={styles["about-launch--flight-number about-launch"]}>Flight number:</span> {matchedLaunch[0].flight_number}
          </p>
          <p>
            <span className={styles["about-launch--mission-name about-launch"]}>Mission name:</span> {matchedLaunch[0].mission_name}
          </p>
          <p>
            <span className={styles["about-launch--mission-year about-launch"]}>Mission year:</span> {matchedLaunch[0].launch_year}
          </p>

          <div className={styles["rockets"]}>
            <h2>About Rocket</h2>
            <p>
              <span className={styles["about-launch--rocket-name about-launch"]}>Rocket name:</span> {matchedLaunch[0].rocket.rocket_name}
            </p>
            <p>
              <span className={styles["about-launch--rocket-type about-launch"]}>Rocket type:</span> {matchedLaunch[0].rocket.rocket_type}
            </p>
          </div>

          <div className={styles["launch-site"]}>
            <h2>About Launch</h2>
            <p>
              <span className={styles["about-launch--launch-site about-launch"]}>Launch site:</span> {matchedLaunch[0].launch_site.site_name_long}
            </p>
          </div>

          <div className={styles["launch-details"]}>
            {!matchedLaunch.launch_success ? (
              <div className={styles["launch-failure-details"]}>
                <p className={styles["failure-launch failure"]}>Launch is unsuccessful</p>
                <p className={styles["failure-times"]}>
                  <span className={styles["about-launch--failure-time about-launch"]}>Failure time:</span> Launch has failed at {matchedLaunch.failureTimes + " seconds"}
                </p>
                <p className={styles["failure-reason"]}>
                  <span className={styles["about-launch--failure-reason about-launch"]}> Launch failure reason: </span> {capitalizeFirstLetter(matchedLaunch.failureReason)}
                </p>
              </div>
            ) : (
              <p className={styles["success-launch"]}>{matchedLaunch[0].launchSuccess} Launch is successful</p>
            )}

            <h2>Launch Details</h2>
            {matchedLaunch[0].details ? (
              <p className={styles["launch-details"]}>{matchedLaunch[0].details}</p>
            ) : (
              <p className={styles["alert-danger"]}>Launch details is not available</p>
            )}
            <h2>Watch the Launch on Youtube</h2>
            {matchedLaunch[0].links.video_link ? (
              <a className={styles["launch-info-link youtube-link"]} href={matchedLaunch[0].links.video_link} target="#">
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
