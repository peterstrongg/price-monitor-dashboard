
<script lang="ts">
    import hljs from "highlight.js"
    import cpp from 'highlight.js/lib/languages/cpp';
    import 'highlight.js/styles/github-dark-dimmed.css';

    hljs.registerLanguage("cpp", cpp);

    const my_code: any = hljs.highlight("#include <iostream>", {language: "cpp"}).value;
</script>
<div id="code-snippet">
    {@html my_code}
</div>