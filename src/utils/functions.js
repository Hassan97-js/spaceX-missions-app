import axios from "axios";

export function getSpaceXLaunches(launchesUseEffect, setLaunches, setLoading = null) {
  launchesUseEffect(() => {
    (async function () {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/launches");

        console.log(response.data);

        /* https://api.spacexdata.com/v4/launches */

        setLaunches(response.data);
        setLoading !== null && setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setLaunches, setLoading]);
}

export function checkFailureDetails(failureDetails) {
  const isFailureDetailsExist = failureDetails ? failureDetails : null;
  const isFailureTimeExist = failureDetails ? failureDetails.time : null;
  const isFailureReasonExist = failureDetails ? failureDetails.reason : null;

  return { isFailureDetailsExist, isFailureTimeExist, isFailureReasonExist };
}

function checkIfExist(launch, searchString) {
  return searchString !== null && launch.toLowerCase().includes(searchString);
}

export function filterLaunches(launches, searchLaunchesInput) {
  const filteredLaunches = launches.filter((launch) => {
    const isSuccessful = searchLaunchesInput === "successful" ? "true" : searchLaunchesInput === "unsuccessful" ? "false" : null;

    const missionName = checkIfExist(launch.mission_name, searchLaunchesInput);
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
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}
