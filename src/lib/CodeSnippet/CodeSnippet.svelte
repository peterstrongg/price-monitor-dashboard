
<script lang="ts">
    import hljs from "highlight.js"
    import cpp from 'highlight.js/lib/languages/cpp';
    import 'highlight.js/styles/a11y-dark.css';

    hljs.registerLanguage("cpp", cpp);

    let files: any;
    let file: any;

    const my_code: any = hljs.highlight("for (int i = 0; i < 5; i++);", {language: "cpp"}).value;
</script>
<div id="code-snippet">
    <code>{@html my_code}</code>
</div>

