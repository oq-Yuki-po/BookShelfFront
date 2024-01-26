'use client'

import { Header } from "@/components/Header/Header"

export default function Login() {
    return (
        <div className="h-screen">
            <Header />
            <div className="flex justify-center items-center h-5/6 w-screen">
            <div style={{ flexDirection: "column" }} className="flex w-1/3 p-4 bg-gray-100 rounded-2xl">
                <input type="text" placeholder="email" className="rounded-xl m-3 p-2 text-2xl bg-zinc-200 placeholder-slate-600 text-slate-600" />
                <input type="password" placeholder="password" className="rounded-xl m-3 p-2 text-2xl bg-zinc-200 placeholder-slate-600 text-slate-600" />
                <div className="ml-auto mr-3">
                    <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-3 py-2 inline-flex items-center">
                        <span className="i-mdi-login w-6 h-6 mr-2"></span>
                        <span className="text-xl">Login</span>
                    </button>
                </div>
            </div>
            </div>
        </div >
    );
}