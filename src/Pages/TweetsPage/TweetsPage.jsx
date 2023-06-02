import { Helmet } from 'react-helmet';
import UsersList from 'components/UsersList/UsersList';

export default function TweetsPage() {
  return (
    <div>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <UsersList />
    </div>
  );
}
