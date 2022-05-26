import { useContext } from "react";
import { useParams } from "react-router-dom";

import GlobalContext from "../../stateContext/globalContext";

import { filterLaunch, capitalizeFirstLetter } from "../../utils/functions";

import styles from "./launchInfoPage.module.scss";

function LaunchInfoPage() {
  const { globalSpaceXLaunches } = useContext(GlobalContext);
  const { id } = useParams();

  const matchedLaunch = globalSpaceXLaunches && filterLaunch(globalSpaceXLaunches, id);

  return (
    matchedLaunch && (
      <div className={`${styles["launch-info-page"]} container`}>
        <div className={styles["launch-info-page__patch-wrapper"]}>
          {matchedLaunch[0].links.mission_patch ? (
            <img className={styles["launch-info-page__patch"]} src={matchedLaunch[0].links.mission_patch} alt="SpaceX mission patch img" />
          ) : (
            matchedLaunch[0].links.mission_patch === null && <p className={`alert danger ${styles["launch-info-page__patch--unavailable"]}`}>Patch is unavailable</p>
          )}
        </div>

        <div className={styles["launch-info-page__info"]}>
          <div>
            <h2>About Mission</h2>

            <p>
              <span>Flight number:</span> {matchedLaunch[0].flight_number}
            </p>

            <p>
              <span>Mission name:</span> {matchedLaunch[0].mission_name}
            </p>

            <p>
              <span>Mission year:</span> {matchedLaunch[0].launch_year}
            </p>

            {matchedLaunch[0].upcoming && <p className="alert info">Upcoming launch</p>}
          </div>

          <div>
            <h2>About Rocket</h2>
            <p>
              <span>Rocket name:</span> {matchedLaunch[0].rocket.rocket_name}
            </p>

            <p>
              <span>Rocket type:</span> {matchedLaunch[0].rocket.rocket_type}
            </p>
          </div>

          <div>
            <h2>About Launch</h2>

            <p>
              <span>Launch site:</span> {matchedLaunch[0].launch_site.site_name_long}
            </p>
          </div>

          <div className={styles["launch-info-page__about-launch"]}>
            {matchedLaunch[0].launch_success === false ? (
              <div>
                <p className={`alert danger ${styles["launch-info-page--unsuccessful"]}`}>Unsuccessful</p>

                <p>
                  <span>Failure time:</span> Launch has failed at {matchedLaunch[0].launch_failure_details.time + " seconds"}
                </p>

                <p>
                  <span>Launch failure reason: </span>
                  {capitalizeFirstLetter(matchedLaunch[0].launch_failure_details.reason)}
                </p>
              </div>
            ) : matchedLaunch[0].launch_success === null ? (
              <p className={`alert warning ${styles["launch-info-page--unknown"]}`}>{matchedLaunch[0].launchSuccess}Rocket hasn't been launched</p>
            ) : (
              <p className={`alert success ${styles["launch-info-page--successful"]}`}>{matchedLaunch[0].launchSuccess}Successful</p>
            )}

            <div>
              <h2>Launch Details</h2>

              {matchedLaunch[0].details !== null ? (
                <p>{matchedLaunch[0].details}</p>
              ) : (
                <p className={`alert danger ${styles["launch-info-page__details--unavailable"]}`}>Launch details is not available</p>
              )}
            </div>

            <div className={styles["launch-info-page__youtube-info"]}>
              <h3 className={styles["launch-info-page__heading--h3"]}>Watch the Launch on Youtube</h3>

              {matchedLaunch[0].links.video_link ? (
                <a className="spacex-link spacex-link--danger" href={matchedLaunch[0].links.video_link} target="#">
                  Watch on Youtube
                </a>
              ) : (
                <p className="alert danger">Launch video is not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default LaunchInfoPage;
