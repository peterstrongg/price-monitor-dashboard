
<script lang="ts">
    import hljs from "highlight.js"
    import cpp from 'highlight.js/lib/languages/cpp';
    import 'highlight.js/styles/a11y-dark.css';

    hljs.registerLanguage("cpp", cpp);

    let files: any;

    const my_code: any = hljs.highlight("for (int i = 0; i < 5; i++);", {language: "cpp"}).value;
</script>
<div class="add-snippet">
    <input type="file" id="file-upload" style="display: none;" bind:files>
    <label for="file-upload">Upload File</label>

    {#if files}
    {#each Array.from(files) as file}
    {#await file.text() then text}
    {#each text.split('\n') as line }
    <code><p>{line}</p></code>
    {/each}
    {/await}
    {/each}
    {/if}
</div>

<style>
    .add-snippet label {
        background: #232323;
        margin-top: 50px;
    }
</style>

