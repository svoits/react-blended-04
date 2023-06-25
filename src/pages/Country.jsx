import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';

export const Country = () => {
  const {country, error,loading} = useFetchCountry();
  
  return (
    <Section>
      <Container>
        {loading && <Loader/>}
        {error && <p>{error}</p>}
      </Container>
    </Section>
  );
};
