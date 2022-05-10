import axios from "axios";

export function getSpaceXLaunches(launchesUseEffect, setLaunches, setLoading = null) {
  launchesUseEffect(() => {
    (async function () {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/launches");

        /* https://api.spacexdata.com/v4/launches */

        setLaunches(response.data);
        setLoading && setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [setLaunches, setLoading]);
}

export function checkFailureDetails(failureDetails) {
  const isLaunchFailureDetails = failureDetails ? failureDetails : null;
  const isLaunchFailureTimes = failureDetails ? failureDetails.time : null;
  const isLaunchFailureReason = failureDetails ? failureDetails.reason : null;
  return { isLaunchFailureDetails, isLaunchFailureTimes, isLaunchFailureReason };
}

function checkIfExist(launch, searchString) {
  return searchString !== null && launch.toLowerCase().includes(searchString);
}

export function filterLaunches(launches, searchInput) {
  const filteredLaunches = launches.filter((launch) => {
    const isSuccessful = searchInput === "successful" ? "true" : searchInput === "unsuccessful" ? "false" : null;

    const missionName = checkIfExist(launch.mission_name, searchInput);
    const launchStatus = checkIfExist(String(launch.launch_success), isSuccessful);

    return missionName || launchStatus;
  });

  return filteredLaunches;
}

export function filterLaunch(launches, id) {
  const filteredLaunch = launches.filter((launch) => {
    return launch.launchNumId === Number(id);
  });

  return filteredLaunch;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
