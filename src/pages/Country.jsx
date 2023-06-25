import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, error, loading } = useFetchCountry();
  const location = useLocation();

  const {
    flag,
    capital,
    countryName,
    id,
    languages = [],
    population,
  } = country ?? {};

  const goBackLink = location?.state?.from ?? routes.HOME;

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Go Back</GoBackBtn>
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
