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
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-3
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
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
        height: 500px;
        -moz-tab-size : 8;
        -o-tab-size : 8;
        tab-size : 8;
    }
    textarea {
        resize: none;
        width: 100%;
        height: 100%;
    }
    textarea:focus {
        outline: none;
    }
</style>