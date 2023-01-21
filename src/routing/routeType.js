const RouteType = Object.freeze({
	PrivateRoute: Symbol('private-route'),
	PublicRoute: Symbol('public-route'),
	AuthCallback: Symbol('auth-callback'),
	Content: Symbol('content'),
	Home: Symbol('home'),
	NotFound: Symbol('not-found')
});

export default RouteType;
