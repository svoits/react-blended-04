import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/useFetchCountries';

export const Home = () => {
  const { countries, loading, error } = useFetchCountries();

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <Heading>{error}</Heading>}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
