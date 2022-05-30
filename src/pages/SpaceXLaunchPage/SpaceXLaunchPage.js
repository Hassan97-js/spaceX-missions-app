import { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import GlobalContext from "../../stateContext/globalContext";

import { filterLaunch, capitalizeFirstLetter } from "../../utils/functions";

import styles from "./spaceXLaunchPage.module.scss";

function SpaceXLaunchPage() {
  const { globalSpaceXLaunches } = useContext(GlobalContext);
  const { id } = useParams();

  const matchedLaunch = globalSpaceXLaunches && filterLaunch(globalSpaceXLaunches, id);

  return (
    matchedLaunch && (
      <div className={`${styles["spacex-launch-page"]} container`}>
        <div className={styles["spacex-launch-page__patch-wrapper"]}>
          {matchedLaunch[0].links.mission_patch ? (
            <img className={styles["spacex-launch-page__patch"]} src={matchedLaunch[0].links.mission_patch} alt="SpaceX mission patch img" />
          ) : (
            matchedLaunch[0].links.mission_patch === null && <p className={`alert danger ${styles["spacex-launch-page__patch--unavailable"]}`}>Patch is unavailable</p>
          )}
        </div>

        <div className={styles["spacex-launch-page__info"]}>
          <div className={styles["spacex-launch-page__mission-info"]}>
            <h2>About Mission</h2>

            <p className="mt-1">
              <span>Flight number:</span> {matchedLaunch[0].flight_number}
            </p>

            <p className="mt-1">
              <span>Mission name:</span> {matchedLaunch[0].mission_name}
            </p>

            <p className="mt-1">
              <span>Mission year:</span> {matchedLaunch[0].launch_year}
            </p>

            {matchedLaunch[0].upcoming && <p className="alert info mt-1">Upcoming launch</p>}
          </div>

          <div className="mt-5">
            <h2>About Rocket</h2>
            <p className="mt-1">
              <span>Rocket name:</span> {matchedLaunch[0].rocket.rocket_name}
            </p>

            <p className="mt-1">
              <span>Rocket type:</span> {matchedLaunch[0].rocket.rocket_type}
            </p>

            {matchedLaunch[0].launch_success === null && <p className="alert warning mt-1">{matchedLaunch[0].launchSuccess}Rocket hasn't been launched</p>}
          </div>

          <div className="mt-5">
            <h2>Launch Details</h2>

            <p className="mt-1">
              <span>Launch site:</span> {matchedLaunch[0].launch_site.site_name_long}
            </p>

            <Fragment>
              {matchedLaunch[0].launch_success === false ? (
                <Fragment>
                  <p className="alert danger mt-1">Unsuccessful</p>

                  <p className="mt-1">
                    <span>Failure time:</span> Launch has failed at {matchedLaunch[0].launch_failure_details.time + " seconds"}
                  </p>

                  <p className="mt-1">
                    <span>Launch failure reason: </span>
                    {capitalizeFirstLetter(matchedLaunch[0].launch_failure_details.reason)}
                  </p>
                </Fragment>
              ) : (
                <p className="alert success mt-1">{matchedLaunch[0].launchSuccess}Successful</p>
              )}

              {matchedLaunch[0].details !== null ? (
                <p className="mt-2">Launch details: {matchedLaunch[0].details}</p>
              ) : (
                <p className="alert danger mt-1">Launch details is not available</p>
              )}
            </Fragment>

            <div className="mt-5">
              <h3>Watch the Launch on Youtube</h3>

              {matchedLaunch[0].links.video_link ? (
                <a className="spacex-link mt-2 spacex-link--danger mx-auto-1000p" href={matchedLaunch[0].links.video_link} target="#">
                  Watch on Youtube
                </a>
              ) : (
                <p className="alert danger mx-auto-1000p mt-1">Launch video is not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SpaceXLaunchPage;
