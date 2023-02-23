const handleFormatting = (event: any) => {
    const page = document.querySelector('textarea');
    if(event.key == "Tab") {
        event.preventDefault();
        page?.setRangeText(
            '\t',
            page.selectionStart,
            page.selectionEnd,
            'end'
        );
    }
}

export default handleFormatting