import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';

export const useIsAuth = () => {
  const [{ data, fetching }] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    // redirects if user is not logged in
    if (!fetching && !data?.me) {
      router.replace('/login?next=' + router.pathname);
    }
  }, [fetching, data, router]);
};
