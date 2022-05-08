import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../stateContext/globalContext";

import LaunchDetails from "../../components/LaunchDetails/LaunchDetails";

import { getUserInput } from "../../utils/eventHandlers";
import { filterLaunches, checkFailureDetails } from "../../utils/functions";

import "./spaceXLaunches.css";

function SpaceXLaunches() {
  const { globalSpaceXData, loading } = useContext(GlobalContext);

  const [searchInput, setSearchInput] = useState("");

  /* globalSpaceXData && console.log("globalSpaceXData", globalSpaceXData); */

  const filteredLaunches = globalSpaceXData && filterLaunches(globalSpaceXData, searchInput);

  return (
    <React.Fragment>
      {loading ? (
        <p id="loading">Loading...</p>
      ) : (
        <React.Fragment>
          <div id="header-background-img">
            <h1 id="explore-header">Explore SpaceX Launches 🚀</h1>
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
                    <React.Fragment key={uuid}>
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
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              <p id="search-result">No Results!</p>
            )}
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default SpaceXLaunches;
