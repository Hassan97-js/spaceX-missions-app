import { useContext, useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../stateContext/globalContext";
import LaunchInfoCard from "../../components/LaunchInfoCard/LaunchInfoCard";
import Spinner from "../../components/global/Spinner/Spinner";

import { getUserInput } from "../../utils/eventHandlers";
import { filterLaunches } from "../../utils/functions";

import styles from "./spaceXLaunchesPage.module.scss";

function SpaceXLaunchesPage() {
  const { globalSpaceXLaunches, loading } = useContext(GlobalContext);

  const [searchLaunchesInput, setSearchLaunchesInput] = useState("");

  const filteredLaunches = globalSpaceXLaunches && filterLaunches(globalSpaceXLaunches, searchLaunchesInput);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <main className={styles["spaceX-launches-page"]}>
          <header className={styles["header-background-img"]}>
            <div className={`${styles["explore-header-background"]} container`}>
              <h1 className={styles["explore-header"]}>Explore SpaceX Launches</h1>
            </div>
          </header>

          <section className={`${styles["spaceX-launches-cards-wrapper"]} container`}>
            <div tabIndex="1" className={styles["search-wrapper"]}>
              <input
                onChange={(e) => {
                  const userInput = getUserInput(e);
                  setSearchLaunchesInput(userInput);
                }}
                className={styles["input-search"]}
                type="search"
                placeholder="Search by mission name or success status"
              />
            </div>

            <h2 className={styles["all-launches-heading--h2"]}>All Launches</h2>

            {filteredLaunches.length !== 0 ? (
              <div className={styles["launches-cards-grid"]}>
                {filteredLaunches.map((launch) => {
                  const uuid = uuidv4();

                  return (
                    <Fragment key={uuid}>
                      <LaunchInfoCard
                        launchNumId={launch.launchNumId}
                        missionPatch={launch.links.mission_patch}
                        flightNumber={launch.flight_number}
                        missionName={launch.mission_name}
                        launchYear={launch.launch_year}
                        rocketName={launch.rocket.rocket_name}
                        rocketType={launch.rocket.rocket_type}
                        siteName={launch.launch_site.site_name_long}
                        launchSuccess={launch.launch_success}
                      />
                    </Fragment>
                  );
                })}
              </div>
            ) : (
              <p className={styles["search-result"]}>No Results</p>
            )}
          </section>
        </main>
      )}
    </Fragment>
  );
}

export default SpaceXLaunchesPage;
