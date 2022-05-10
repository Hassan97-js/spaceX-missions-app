import { useContext, useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../stateContext/globalContext";
import LaunchDetails from "../../components/LaunchDetails/LaunchDetails";
import Spinner from "../../components/global/Spinner/Spinner";

import { getUserInput } from "../../utils/eventHandlers";
import { filterLaunches, checkFailureDetails } from "../../utils/functions";

import "./spaceXLaunches.css";

function SpaceXLaunches() {
  const { globalSpaceXLaunches, loading } = useContext(GlobalContext);

  const [searchInput, setSearchInput] = useState("");

  /* globalSpaceXLaunches && console.log("globalSpaceXLaunches", globalSpaceXLaunches); */

  const filteredLaunches = globalSpaceXLaunches && filterLaunches(globalSpaceXLaunches, searchInput);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div id="header-background-img">
            <h1 id="explore-header">Explore SpaceX Launches</h1>
          </div>

          <section id="missions-wrapper">
            <div tabIndex="1" id="search-wrapper">
              <input
                onChange={(e) => {
                  const userInput = getUserInput(e);
                  setSearchInput(userInput);
                }}
                id="input-search"
                type="search"
                placeholder="Search by mission name or success status"
              />
            </div>

            <h2 id="all-missions">All Launches</h2>

            {filteredLaunches.length !== 0 ? (
              <div className="grid">
                {filteredLaunches.map((launch) => {
                  const uuid = uuidv4();

                  const isLaunchFailureDetails = checkFailureDetails(launch.launch_failure_details).isLaunchFailureDetails;
                  const isLaunchFailureTimes = checkFailureDetails(launch.launch_failure_details).isLaunchFailureTimes;
                  const isLaunchFailureReason = checkFailureDetails(launch.launch_failure_details).isLaunchFailureReason;
                  return (
                    <Fragment key={uuid}>
                      <LaunchDetails
                        launchNumId={launch.launchNumId}
                        missionPatch={launch.links.mission_patch}
                        flightNumber={launch.flight_number}
                        missionName={launch.mission_name}
                        launchYear={launch.launch_year}
                        rocketName={launch.rocket.rocket_name}
                        rocketType={launch.rocket.rocket_type}
                        siteName={launch.launch_site.site_name_long}
                        launchFailureDetails={isLaunchFailureDetails}
                        launchFailureTimes={isLaunchFailureTimes}
                        launchFailureReason={isLaunchFailureReason}
                        launchSuccess={launch.launch_success}
                      />
                    </Fragment>
                  );
                })}
              </div>
            ) : (
              <p id="search-result">No Results!</p>
            )}
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}

export default SpaceXLaunches;
