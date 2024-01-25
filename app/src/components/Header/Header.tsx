import React from 'react'

import { useRouter } from "next/navigation";

import { useRecoilValue } from 'recoil'

import { loginUserState } from '../../recoil/atoms/login'

export const Header: React.FC = () => {
    
    const router = useRouter();

    function onClickLogin() {
        router.push("/login");
    }
    const loginUser = useRecoilValue(loginUserState)
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', border: 'solid black' }} className='p-3 bg-zinc-600'>
            <h1 className='text-4xl text-white'>Book Shelf App</h1>
            <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-5 py-2" onClick={()=>onClickLogin()}>{loginUser ? loginUser : 'ログイン'}</button>
        </header>
    );
};