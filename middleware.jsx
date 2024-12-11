import { NextResponse } from "next/server";

export default function middleware(request) {
	const { pathname } = new URL(request.url); // Extract the current path

	if (pathname === "/") {
		// Redirect from home page to /video
		return NextResponse.redirect(new URL("/video", request.url));
	}

	if (pathname === "/contact") {
		// Redirect from /contact to /about
		return NextResponse.redirect(new URL("/about", request.url));
	}

	// If no matching path, return default behavior
	return NextResponse.next();
}

export const config = {
	matcher: ["/", "/contact"], // Apply middleware to specific paths
};
