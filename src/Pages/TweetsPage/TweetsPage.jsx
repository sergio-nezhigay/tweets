import { Helmet } from 'react-helmet';
import UsersList from 'components/UsersList/UsersList';

export default function TweetsPage() {
  return (
    <div>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <h1>Tweets1 sry</h1>
      <UsersList />
    </div>
  );
}
