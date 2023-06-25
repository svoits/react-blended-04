import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/country-service';
import { useParams } from 'react-router-dom';

export const useFetchCountry = () => {
  const [country, SetCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      setError(null);
      try {
        const dataCountry = await fetchCountry(id);
        console.log(dataCountry);
        SetCountry(dataCountry);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [id]);
  return { country, error, loading };
};
