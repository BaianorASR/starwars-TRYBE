import { useEffect, useMemo, useState } from 'react';

export default function useFetch() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((r) => r.json())
        .then((response) => setData(response))
        .catch((err) => setError(err.message))
        .finally(() => setIsFetching(false));
    }
    )();
  }, []);

  return useMemo(() => ({
    error,
    isFetching,
    data,
  }), [data, error, isFetching]);
}
