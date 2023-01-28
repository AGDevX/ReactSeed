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
		enableServiceWorker: true
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
			signInRedirectUrl: 'http://localhost:8080/auth-callback',
			signOutRedirectUrl: 'http://localhost:8080'
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
