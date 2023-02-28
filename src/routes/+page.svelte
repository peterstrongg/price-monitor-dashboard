<script>
    import "../app.css"
    import SearchBar from "../lib/searchbar.svelte";
    import LoginSignup from "../lib/loginsignup.svelte"
</script>

<div class="landing-page">
    <div class="main-content flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:divide-x">
        <div class="left-side">
            <h1 class="mb-4 text-3xl font-extrabold text-whitetm md:text-5xl lg:text-6xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-whitetm from-greentm">Slippi Chat<br></span> 
                Scalable AI.
            </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl">
                Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
            </p>
        </div>
        <div class="right-side">
            <div class="w-11/12 ml-auto mr-auto pt-7 lg:pt-0">
                <SearchBar />
                <LoginSignup />
            </div>
        </div>
    </div>
</div>

<style>
    .landing-page {
        background: #0f0f0f;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .main-content {
        width: 70rem;
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
</style>

