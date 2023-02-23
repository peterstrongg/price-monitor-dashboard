const handleFormatting = (event: any) => {
    const page = document.querySelectorAll('textarea');
    if(event.key == "Tab") {
        event.preventDefault();
        page[1]?.setRangeText(
            '\t',
            page[1].selectionStart,
            page[1].selectionEnd,
            'end'
        );
    }
}

export default handleFormatting