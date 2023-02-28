// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: import('pocketbase').default
			user: import('pocketbase').default['authstore']['model']
		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
