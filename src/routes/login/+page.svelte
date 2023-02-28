<script lang="ts">
    import { goto } from "$app/navigation";
    import "../../app.css"
    import { currentUser, pb } from '../../lib/pocketbase'

    let username: string
    let password: string

    async function login() {
        console.log(username)
        console.log(password)
        
        try {
            pb.collection('users').authWithPassword(username, password)
        } catch(err) {
            console.log(err)
        }
    }
</script>

{#if $currentUser}
<h1>Logged in</h1>
{:else}
<div style:background-color="#0f0f0f" class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Log in</h1>
            <input 
                type="text"
                class="input-field block border border-grey-light w-full p-3 rounded mb-4"
                bind:value={username}
                placeholder="Melee" />
            <input 
                type="password"
                class="input-field block border border-grey-light w-full p-3 rounded mb-4"
                bind:value={password}
                placeholder="Password" />
            <button
                type="submit"
                on:click={login}
                class="w-full text-center py-3 rounded bg-greentm text-white hover:bg-green-dark focus:outline-none my-1"
            >Log in</button>

            <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="/">
                    Terms of Service
                </a> and 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="/">
                    Privacy Policy
                </a>
            </div>
        </div>

        <div class="text-white mt-6">
            Don't have an account?
            <a class="no-underline border-b border-blue text-greentm" href="/signup">
                Sign up
            </a>.
        </div>
    </div>
</div>
{/if}

<style>
    .input-field {
        background: #F6F6F6;
    }
</style>