import axios from "axios";

function GetSpaceXdata(useEffect, setLaunches) {
  useEffect(() => {
    (async function getSpaceXLaunches() {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/launches"
        );
        setLaunches(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [setLaunches]);
}

export default GetSpaceXdata;
