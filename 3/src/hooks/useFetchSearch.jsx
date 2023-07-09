import { useSearchParams } from "react-router-dom";
import { fetchByRegion} from "../service/country-service"
import { useState, useEffect } from "react";

export const useFetchSearch = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');
    if(!region) return;

    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);

        const countriesData = await fetchByRegion(region);

        setCountries(countriesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [searchParams]);

  const handleChangeSearchParams = (query) => {
    setSearchParams({query})
  }
  return { countries, loading, error, handleChangeSearchParams };
}