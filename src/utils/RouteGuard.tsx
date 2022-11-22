
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { status } = useSession();

  //(参照) https://zenn.dev/farstep/books/7acd1a7fee7e18/viewer/3d338a

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }

  }, [router, status]);

  if (status === 'unauthenticated') return null;
  return <>{children}</>;

}

export default RouteGuard