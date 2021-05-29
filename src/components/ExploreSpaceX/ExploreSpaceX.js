import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import GetSpaceXdata from "../../utils/AxiosFunctions";
import "../ExploreSpaceX/ExploreSpaceX.css";

function ExploreSpaceX() {
  const [launches, setLaunches] = useState(null);

  GetSpaceXdata(useEffect, setLaunches);

  const DOMLaunches =
    launches &&
    launches.map(launch => {
      const uuid = uuidv4();
      return (
        <div id="mission" key={uuid}>
          <div id="image-wrapper">
            {launch.links.mission_patch ? (
              <img
                id="spaceXimage"
                src={launch.links.mission_patch}
                alt="SpaceX mission patch img"
              />
            ) : (
              <p className="danger-alert">Image is not available</p>
            )}
          </div>
          <div id="information-wrapper">
            <h2>About Mission</h2>

            <p>
              <span className="highlight-text">Flight number:</span>{" "}
              {launch.flight_number}
            </p>
            <p>
              <span className="highlight-text">Mission name:</span>{" "}
              {launch.mission_name}
            </p>
            <p>
              {" "}
              <span className="highlight-text">Launch year:</span>{" "}
              {launch.launch_year}
            </p>
            <div id="rockets">
              <h2>About Rocket</h2>
              <p>
                {" "}
                <span className="highlight-text">Rocket name:</span>{" "}
                {launch.rocket.rocket_name}
              </p>
              <p>
                {" "}
                <span className="highlight-text">Rocket type:</span>{" "}
                {launch.rocket.rocket_type}
              </p>
            </div>
            <div id="launch-site">
              <h2>About Launch</h2>
              <p>
                {" "}
                <span className="highlight-text">Launch site:</span>{" "}
                {launch.launch_site.site_name_long}
              </p>
            </div>
            <div id="launch-success">
              {launch.launch_failure_details ? (
                <div className="launch-failure-details">
                  <p>
                    {" "}
                    <span className="highlight-text">
                      {" "}
                      Launch is unsuccessful
                    </span>
                  </p>
                  <p className="failure-times">
                    <span className="highlight-text">Failure times:</span>{" "}
                    Launch has failed{" "}
                    {launch.launch_failure_details.time + " times."}
                  </p>
                  <p className="failure-reason">
                    Launch failure reason:{" "}
                    {launch.launch_failure_details.reason}
                  </p>
                </div>
              ) : (
                <p>{launch.launch_success} Launch is successful</p>
              )}
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      {!DOMLaunches ? (
        <p id="before-fetching">Loading...</p>
      ) : (
        <>
          <div id="header-background-img">
            <h1 id="explore-header">Explore SpaceX Launches 🚀 </h1>
          </div>
          <section id="missions-wrapper">
            <h1>All Missions</h1>
            <div className="grid">{DOMLaunches}</div>
          </section>
        </>
      )}
    </>
  );
}

export default ExploreSpaceX;
