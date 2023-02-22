<script lang="ts">
    import handleFormatting from "./NotePage";
    const handleKeyDown = (event: any) => {
        handleFormatting(event.key);
    }
</script>

<textarea 
    id="page"
    rows="4" 
    class="block p-2.5 w-full text-sm" 
    placeholder="Start Typing Here"
    on:keydown = {handleKeyDown}
/>

<style>
    textarea {
        display: inline-block;
        border-radius: 5px;
        width: 95%;
        margin-left: auto;
        margin-right: auto; 
        margin-top: 20px;
        margin-bottom: 20px;
        background: #363636;
    }
    textarea:focus {
        outline: none;
    }
</style>