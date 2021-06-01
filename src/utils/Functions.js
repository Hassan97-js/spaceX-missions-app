import axios from "axios";

function GetSpaceXdata(useEffect, setLaunches, setLoading) {
  useEffect(() => {
    (async function getSpaceXLaunches() {
      try {
        const response = await axios.get("https://api.spacexdata.com/v3/launches");
        setLaunches(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function CheckIfExist(launch, searchString) {
  return searchString !== null && launch.toLowerCase().includes(searchString);
}

function FilterLaunches(launches, searchInput) {
  const filteredLaunches = launches.filter(launch => {
    const isSuccessful = searchInput === "successful" ? "true" : searchInput === "unsuccessful" ? "false" : null;

    const missionName = CheckIfExist(launch.mission_name, searchInput);
    const launchStatus = CheckIfExist(String(launch.launch_success), isSuccessful);

    return missionName || launchStatus;
  });

  return filteredLaunches;
}

function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { GetSpaceXdata, FilterLaunches, CapitalizeFirstLetter };
