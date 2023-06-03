import { Helmet } from 'react-helmet';
import UsersList from 'components/UsersList/UsersList';
import { Section } from 'components/Section/Section';

export default function TweetsPage() {
  return (
    <div>
      <Helmet>
        <title>Tweets Page - Tweet User Cards App</title>
      </Helmet>
      <Section title="UsersList" isHidden>
        <UsersList />
      </Section>
    </div>
  );
}
