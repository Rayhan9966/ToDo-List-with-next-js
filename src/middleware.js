import { NextResponse } from "next/server"
// const user = false;
const coo = 'next-hero'

export const middleware = (request) => {
  
    const cookies =(request.cookies.get('token'))
    if(!cookies || cookies.value !== coo){
        return NextResponse.redirect(new URL('/todo/login', request.url))
    }
    return NextResponse.next()
}
export const config = {
    // matcher: ['/todo/:path', '/list']
    matcher: ['/todo', '/list']
}
// import { NextResponse } from "next/server";

// const coo = 'next-hero';

// export function middleware(request) {
//   const tokenCookie = request.cookies.get('token');
  
//   // Check if the token cookie exists and if it matches the expected value
//   if (!tokenCookie || tokenCookie.value !== coo) {
//     return NextResponse.redirect(new URL('/todo/login', request.url));
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/todo', '/list'],
// };
