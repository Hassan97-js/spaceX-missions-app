import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import GlobalContext from "../../stateContext/globalContext";

import { filterLaunch, capitalizeFirstLetter, checkFailureDetails } from "../../utils/functions";

function LaunchMoreInfo(props) {
  const { globalSpaceXData } = useContext(GlobalContext);
  const { id } = useParams();

  const matchedLaunch = globalSpaceXData && filterLaunch(globalSpaceXData, id);
  matchedLaunch && console.log(matchedLaunch);

  const failureDetails = matchedLaunch && checkFailureDetails(matchedLaunch[0].launch_failure_details).isLaunchFailureDetails;
  const failureTimes = matchedLaunch && checkFailureDetails(matchedLaunch[0].launch_failure_details).isLaunchFailureTimes;
  const failureReason = matchedLaunch && checkFailureDetails(matchedLaunch[0].launch_failure_details).isLaunchFailureReason;

  return (
    matchedLaunch && (
      <div className={props.className}>
        <div className="learn-more-image-wrapper">
          {matchedLaunch && matchedLaunch[0].links.mission_patch ? (
            <img className="spaceX-img-big" src={matchedLaunch[0].links.mission_patch} alt="SpaceX mission patch img" />
          ) : (
            matchedLaunch && matchedLaunch[0].links.mission_patch === null && <p className="danger-alert">Image is not available</p>
          )}
        </div>
        <div className="learn-more-information-wrapper">
          <h2>About Mission</h2>

          <p>
            <span className="highlight-text">Flight number:</span> {matchedLaunch[0].flight_number}
          </p>
          <p>
            <span className="highlight-text">Mission name:</span> {matchedLaunch[0].mission_name}
          </p>
          <p>
            {" "}
            <span className="highlight-text">Mission year:</span> {matchedLaunch[0].launch_year}
          </p>
          <div id="rockets">
            <h2>About Rocket</h2>
            <p>
              {" "}
              <span className="highlight-text">Rocket name:</span> {matchedLaunch[0].rocket.rocket_name}
            </p>
            <p>
              {" "}
              <span className="highlight-text">Rocket type:</span> {matchedLaunch[0].rocket.rocket_type}
            </p>
          </div>
          <div id="launch-site">
            <h2>About Launch</h2>
            <p>
              {" "}
              <span className="highlight-text">Launch site:</span> {matchedLaunch[0].launch_site.site_name_long}
            </p>
          </div>
          <div id="launch-details">
            {failureDetails ? (
              <div className="launch-failure-details">
                <p className="failure-launch">Launch is unsuccessful</p>
                <p className="failure-times">
                  <span className="highlight-text">Failure time:</span> Launch has failed at {failureTimes + " seconds"}
                </p>
                <p className="failure-reason">
                  <span className="highlight-text"> Launch failure reason: </span> {capitalizeFirstLetter(failureReason)}
                </p>
              </div>
            ) : (
              <p className="success-launch">{matchedLaunch[0].launchSuccess} Launch is successful</p>
            )}
            {/* from here will move to LaunchMoreInfo component*/}
            <h2>Launch Details</h2>
            {matchedLaunch[0].details ? (
              <p className="launch-details">{matchedLaunch[0].details}</p>
            ) : (
              <p className="danger-alert">Launch details is not available</p>
            )}
            <h2>Watch the Launch on Youtube</h2>
            {matchedLaunch[0].links.video_link ? (
              <a className="youtube-link d-block" href={matchedLaunch[0].links.video_link} target="#">
                Watch on Youtube
              </a>
            ) : (
              <p className="danger-alert">Launch video is not available</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default styled(LaunchMoreInfo)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  height: calc(80vh - 5.5rem);

  div.learn-more-information-wrapper {
    padding: 2rem;
  }

  div.learn-more-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img.spaceX-img-big {
    width: 80%;
  }
`;
