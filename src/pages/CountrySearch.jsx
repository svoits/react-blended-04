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
  const { countries, loading, error, handleChangeSearchParams } = useFetchSearch();
  return (
    <Section>
      <Container>
        <h2>CountrySearch</h2>
      </Container>
    </Section>
  );
};
