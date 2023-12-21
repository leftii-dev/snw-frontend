import { NextResponse } from 'next/server'

export function middleware(req) {

    const { pathname } = req.nextUrl

    if(pathname.startsWith('/api')) {
        req.nextUrl.credentials = 'include'
        const newPath = pathname.replace('/api', process.env.BASE_API)
        return NextResponse.rewrite(new URL(newPath))
    }
    if(pathname.startsWith('/login')) {
        const newPath = pathname.replace('/login', process.env.LOGIN_URL)
        return NextResponse.rewrite(new URL(newPath))
    }

    return NextResponse.next()
}