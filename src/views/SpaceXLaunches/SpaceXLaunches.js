import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import LaunchDetails from "../../components/LaunchDetails/LaunchDetails";

import getUserInput from "../../utils/EventsHandlers";

import { GetSpaceXdata, FilterLaunches } from "../../utils/Functions";

import "./SpaceXLaunches.css";

function SpaceXLaunches() {
  const [launches, setLaunches] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  GetSpaceXdata(useEffect, setLaunches, setLoading);

  const filteredLaunches = launches && FilterLaunches(launches, searchInput);

  return (
    <React.Fragment>
      {loading ? (
        <p id="loading">Loading...</p>
      ) : (
        <>
          <div id="header-background-img">
            <h1 id="explore-header">Explore SpaceX Launches 🚀</h1>
          </div>

          <section id="missions-wrapper">
            <div tabIndex="1" id="search-wrapper">
              <input
                onChange={e => {
                  const userInput = getUserInput(e);
                  setSearchInput(userInput);
                }}
                id="input-search"
                type="search"
                placeholder="Search by mission name and success status"
              />
            </div>

            <h1 id="all-missions">All Launches</h1>

            {filteredLaunches.length !== 0 ? (
              <div className="grid">
                {filteredLaunches.map(launch => {
                  const uuid = uuidv4();
                  const isLaunchFailureDetails = launch.launch_failure_details ? launch.launch_failure_details : null;
                  const isLaunchFailureTimes = launch.launch_failure_details ? launch.launch_failure_details.time : null;
                  const isLaunchFailureReason = launch.launch_failure_details ? launch.launch_failure_details.reason : null;
                  return (
                    <React.Fragment key={uuid}>
                      <LaunchDetails
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
                        launchDetailsInfo={launch.details}
                        launchYoutube={launch.links.video_link}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            ) : (
              <p id="search-result">No Results!</p>
            )}
          </section>
        </>
      )}
    </React.Fragment>
  );
}

export default SpaceXLaunches;
