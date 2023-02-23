<script lang="ts">
    import handleFormatting from "./NoteSnippet";
    import autosize from "svelte-autosize";
    
    export let block_id: number;

    const handleKeyDown = (event: any) => {
        handleFormatting(event, block_id);
    }
</script>

<textarea 
    id="page"
    rows="4" 
    class="block p-2.5 w-full text-sm" 
    placeholder="Type Notes Here..."
    on:keydown = {handleKeyDown}
    use:autosize
/>

<style>
    textarea {
        display: inline-block;
        border-radius: 5px;
        width: 95%;
        margin-left: auto;
        margin-right: auto; 
        margin-top: 25px;
        margin-bottom: 20px;
        background: #363636;
    }
    textarea:focus {
        outline: none;
    }
</style>