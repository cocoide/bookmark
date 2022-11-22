import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';


const Article = () => {
    return (
        <div>Article</div>
    )
}
export default Article

export const getServerSideProps: GetServerSideProps = async ({
    req, // リクエストに関するオブジェクト
    params, // パラメータ
    res, // レスポンスに関するオブジェクト
}) => {
    const session = await getSession({ req });
    if (!session) {
        res.statusCode = 401; // アクセス権が無い、または認証に失敗したときのステータスコードです
        return { props: { article: null } };
    }
    const article = await prisma.article.findUnique({
        where: {
            id: Number(params?.id),
        },
    });
    return {
        props: { article },
    };
};