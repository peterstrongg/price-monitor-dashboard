<script lang="ts">
    import NoteSnippet from "../NoteSnippet/NoteSnippet.svelte";
    import CodeSnippet from "../CodeSnippet/CodeSnippet.svelte";
</script>

<div class="notePage">
    <NoteSnippet />
    <CodeSnippet />
</div>

<style>
    .notePage {
        width: 80rem;
        max-width: 95%;
        margin-left:auto;
        margin-right:auto;
        height: auto;
        background: #3c3c3c;
        border-radius: 5px;
        text-align: center;
        -moz-tab-size : 8;
        -o-tab-size : 8;
        tab-size : 8;
    }
</style>