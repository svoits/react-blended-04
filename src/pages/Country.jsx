import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';

export const Country = () => {
  const { country, error, loading } = useFetchCountry();

  const {
    flag,
    capital,
    countryName,
    id,
    languages = [],
    population,
  } = country ?? {};

  return (
    <Section>
      <Container>
        {country && (
          <CountryInfo
            flag={flag}
            capital={capital}
            country={countryName}
            id={id}
            languages={languages}
            population={population}
          />
        )}
        {loading && <Loader />}
        {error && <p>{error}</p>}
      </Container>
    </Section>
  );
};
