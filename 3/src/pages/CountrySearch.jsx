import { useFetchSearch } from 'hooks/useFetchSearch';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const { countries, loading, error, handleChangeSearchParams } =
    useFetchSearch();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleChangeSearchParams} />
        {loading && <Loader />}
        {error && <Heading>{error}</Heading>}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
