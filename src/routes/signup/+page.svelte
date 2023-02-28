<script lang="ts">
    import "../../app.css"
    import { currentUser, pb } from '../../lib/pocketbase'
    import { redirect } from '@sveltejs/kit'
    import { goto } from "$app/navigation"

    let username: string
    let email: string
    let password: string
    let password_conf: string

    async function signUp() {
        if(password === password_conf && password.length >= 8) {
            try {
                const data = {
                    username, 
                    password,
                    email,
                    passwordConfirm: password,
                    name: username,
                }
                const createdUser = await pb.collection('users').create(data)
                goto("/login")
            } catch(err) {
                console.log(err)
            }
        } else {
            console.log("invalid password")
        }
    }
</script>

<div style:background-color="#0f0f0f" class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input 
                type="text"
                class="input-field block border border-grey-light w-full p-3 rounded mb-4"
                bind:value={username}
                placeholder="Username" />

            <input 
                type="text"
                class="input-field block border border-grey-light w-full p-3 rounded mb-4"
                bind:value={email}
                placeholder="Email" />

            <input 
                type="password"
                class="input-field block border border-grey-light w-full p-3 rounded mb-4"
                bind:value={password}
                placeholder="Password" />

            <input 
                type="password"
                class="input-field block border border-grey-light w-full p-3 rounded mb-4"
                bind:value={password_conf}
                placeholder="Confirm Password" />
            <p class="text-xs text-lightgray"><i>Password must be at least 8 characters</i></p>
            <button
                on:click={signUp}
                class="w-full text-center py-3 rounded bg-greentm text-white hover:bg-green-dark focus:outline-none my-1"
            >Create Account</button>

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
            Already have an account? 
            <a class="no-underline border-b border-blue text-greentm" href="/login">
                Log in
            </a>.
        </div>
    </div>
</div>

<style>
    .input-field {
        background: #F6F6F6;
    }
</style>