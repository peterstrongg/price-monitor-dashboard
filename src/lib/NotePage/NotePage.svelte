<script lang="ts">
    import handleFormatting from "./NotePage";
    const handleKeyDown = (event: any) => {
        handleFormatting(event.key);
    }
</script>

<div class="notePage">
    <textarea 
        id="page"
        rows="4" 
        class="block p-2.5 w-full text-sm" 
        placeholder="Start Typing Here"
        on:keydown = {handleKeyDown}
    />
</div>


<style>
    .notePage {
        width: 80rem;
        max-width: 95%;
        margin-left:auto;
        margin-right:auto;
        height: 100vh;
        background: #3c3c3c;
        border-radius: 5px;
        -moz-tab-size : 8;
        -o-tab-size : 8;
        tab-size : 8;
    }
    textarea {
        border-radius: 5px;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
        background: #363636;
    }
    textarea:focus {
        outline: none;
    }
</style>