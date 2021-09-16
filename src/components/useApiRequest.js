import axios from 'axios';
import { useEffect, useState } from "react";

  const useApiRequest = (url , callback) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get(url)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          })      
          .finally(() => {
            setIsLoaded(true);
          });
      };
      fetchData();
    }, [url]);
  
    return { error, isLoaded, data };
  };

  export default useApiRequest;
  //https://gnews.io/api/v4/search?q=nft&lang=en&token=9e855350d69e4b90fc112768700fa185