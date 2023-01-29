module.exports = {
	ENVIRONMENT: {
		app: 'local',
		node: 'development'
	},
	HOST: {
		baseHref: '/'
	},
	APP: {
		name: 'React Seed (local)',
		description: 'React starter app',
		showReactRouterDomErrorPage: true,
		enableServiceWorker: true,
		autoSignIn: true
	},
	APP_INITIAL_STATE: {
		counter: 12,
		albums: []
	},
	APIS: {
		jsonPlaceholder: {
			baseUrl: 'https://jsonplaceholder.typicode.com'
		}
	},
	AUTH_N: {
		provider: 'auth0',
		auth0: {
			domain: 'agdevx.auth0.com',
			clientId: 'xIWLicq70VulQHYmihep3KYRO8pTAISC',
			signInRedirectUrl: 'https://localhost:8080/auth-callback?auth-type=sign-in',
			signOutRedirectUrl: 'https://localhost:8080/auth-callback?auth-type=sign-out' //-- Must be set in Auth0 site
		}
	},
	CLIENT_STORAGE: {
		provider: 'localForage',
		localForage: {
			driver: 'asyncStorage', //-- localforage.INDEXEDDB
			name: 'RS.local',
			version: 1.0,
			storeName: 'RS.local',
			description: 'Client-side storage'
		}
	}
};
