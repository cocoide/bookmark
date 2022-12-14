import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
    const { data: session, status } = useSession();
    return (
        <>
            <div className='bg-slate-400 m-5 rounded-md'>
                <div className='container mx-auto flex max-w-4xl items-center px-2 py-7'>
                    <div className='mx-auto flex w-full flex-wrap items-center'>
                        <div className='flex w-full justify-center font-extrabold text-white lg:w-1/2 lg:justify-start'>
                            <Link href='/'>
                                <div className='text-3xl text-gray-900 hover:text-gray-900 hover:no-underline'>
                                    📔 &nbsp; <span className=' text-gray-200'>BOOFee</span>
                                </div>
                            </Link>
                        </div>
                        <div className='flex w-full content-center justify-between pt-2 lg:w-1/2 lg:justify-end lg:pt-0'>
                            <ul className='list-reset flex flex-1 items-center justify-center lg:flex-none'>
                                <li className='py-1 px-4 text-white no-underline'>
                                    <Link href='/articles'>
                                        <div>Articles</div>
                                    </Link>
                                </li>
                                {status !== 'loading' && session && (
                                    // status が 'loading' でない、つまり認証情報の取得が完了している、
                                    // かつ、認証されている場合に、下記が表示されます
                                    <>
                                        <li className='py-1 px-4 text-white no-underline'>
                                            <Link href='/mypage'>
                                                <div>MyPage</div>
                                            </Link>
                                        </li>
                                        <li className='py-1 px-4 text-white no-underline'>
                                            <button onClick={() => signOut()}>
                                                <div>Log out</div>
                                            </button>
                                        </li>
                                    </>
                                )}
                                {status !== 'loading' && !session && (
                                    // status が 'loading' でない、つまり認証情報の取得が完了している、
                                    // かつ、認証されていない場合に、下記が表示されます
                                    <li className='py-1 px-4 text-white no-underline'>
                                        <button onClick={() => signIn()}>
                                            <div>Sign In</div>
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;