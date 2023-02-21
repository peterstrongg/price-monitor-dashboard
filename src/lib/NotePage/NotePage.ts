const handleFormatting = (key: any) => {
    const page = document.querySelector('textarea');
    if(key == "Tab") {
        page?.setRangeText(
            '\t',
            page.selectionStart,
            page.selectionEnd,
            'end'
        );
    }
}

export default handleFormatting