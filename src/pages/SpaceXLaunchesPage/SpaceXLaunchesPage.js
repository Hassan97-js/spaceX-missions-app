import { useContext, useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../stateContext/globalContext";
import LaunchInfoCard from "../../components/LaunchInfoCard/LaunchInfoCard";
import Spinner from "../../components/global/Spinner/Spinner";

import { getUserInput } from "../../utils/eventHandlers";
import { filterLaunches, checkFailureDetails } from "../../utils/functions";

import "./spaceXLaunchesPage.css";

function SpaceXLaunchesPage() {
  const { globalSpaceXLaunches, loading } = useContext(GlobalContext);

  const [searchLaunchesInput, setSearchLaunchesInput] = useState("");

  const filteredLaunches = globalSpaceXLaunches && filterLaunches(globalSpaceXLaunches, searchLaunchesInput);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <main className="spaceX-launches-page">
          <header className="header-background-img">
            <div className="explore-header-background">
              <h1 className="explore-header">Explore SpaceX Launches</h1>
            </div>
          </header>

          <section className="spaceX-launches-cards-wrapper">
            <div tabIndex="1" className="search-wrapper">
              <input
                onChange={(e) => {
                  const userInput = getUserInput(e);
                  setSearchLaunchesInput(userInput);
                }}
                className="input-search"
                type="search"
                placeholder="Search by mission name or success status"
              />
            </div>

            <h2 className="all-launches-heading--h2">All Launches</h2>

            {filteredLaunches.length !== 0 ? (
              <div className="launches-cards-grid">
                {filteredLaunches.map((launch) => {
                  const uuid = uuidv4();

                  const isFailureDetailsExist = checkFailureDetails(launch.launch_failure_details).isLaunchFailureDetails;
                  const isFailureTimeExist = checkFailureDetails(launch.launch_failure_details).isFailureTimeExist;
                  const isFailureReasonExist = checkFailureDetails(launch.launch_failure_details).isLaunchFailureReason;

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
                        launchFailureDetails={isFailureDetailsExist}
                        launchFailureTimes={isFailureTimeExist}
                        launchFailureReason={isFailureReasonExist}
                        launchSuccess={launch.launch_success}
                      />
                    </Fragment>
                  );
                })}
              </div>
            ) : (
              <p className="search-result">No Results</p>
            )}
          </section>
        </main>
      )}
    </Fragment>
  );
}

export default SpaceXLaunchesPage;
