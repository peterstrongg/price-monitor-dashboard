
<script lang="js">
    import hljs from "highlight.js"
    import javascript from 'highlight.js/lib/languages/javascript';
    import 'highlight.js/styles/github.css';

    hljs.registerLanguage("javascript", javascript)

    const my_code = hljs.highlight("const x = 5;", {language: "javascript"}).value;
</script>
<div id="code-snippet">
    {@html my_code}
</div>