import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loading from '../components/Loading';
import RouteGuard from './RouteGuard';

// ログイン済みユーザにのみ表示するページ
// 今回は、マイページと記事の詳細ページに関して、ログインを要求
const guardRouteList = ['/mypage', '/articles/[id]'];
//配列『authRoute』に、ログインを要するページのパスを入れてる

// children に型をつけています
const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const session = useSession();
    const router = useRouter();

    // 認証情報取得中は、ローディング画面を表示
    if (session.status === 'loading') return <Loading />;

    return (
        <>
            {guardRouteList.includes(router.pathname) ? (
                // もしも、現在のページが、ログインを要求するページだった場合
                // ログイン状況に応じて、ページを表示するか or ログイン画面へリダイレクトさせるかを判定します
                <RouteGuard>{children}</RouteGuard>
            ) : (
                // 現在のページが、ログインを要求しないページだった場合
                // 認証情報を調べる必要はないので、そのままページを表示させます
                children
            )}
        </>
    );
};

export default AuthWrapper;