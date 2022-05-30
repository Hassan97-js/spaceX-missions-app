import { useContext, useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../stateContext/globalContext";
import SpaceXLaunchCard from "../../components/SpaceXLaunchCard/SpaceXLaunchCard";
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
        <main className={styles["spacex-launches-page"]}>
          <header className={styles["spacex-launches-page__header-background-image"]}>
            <div className={`${styles["spacex-launches-page__header-heading-backdrop"]} container`}>
              <h1 className={styles["spacex-launches-page__header-heading"]}>Explore SpaceX Launches</h1>
            </div>
          </header>

          <section className={`${styles["spacex-launches"]} container`}>
            <div tabIndex="1" className={styles["spacex-launches-page__search-wrapper"]}>
              <input
                onChange={(e) => {
                  const userInput = getUserInput(e);
                  setSearchLaunchesInput(userInput);
                }}
                className={styles["spacex-launches-page__search"]}
                type="search"
                placeholder="Search by mission name or success status"
              />
            </div>

            <h2 className={styles["spacex-launches__heading"]}>All Launches</h2>

            {filteredLaunches.length !== 0 ? (
              <div className={styles["spacex-launches__grid"]}>
                {filteredLaunches.map((launch) => {
                  const uuid = uuidv4();

                  return (
                    <Fragment key={uuid}>
                      <SpaceXLaunchCard
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
              <p className={`${styles["spacex-launches__search-result"]} mx-auto`}>No Results</p>
            )}
          </section>
        </main>
      )}
    </Fragment>
  );
}

export default SpaceXLaunchesPage;
