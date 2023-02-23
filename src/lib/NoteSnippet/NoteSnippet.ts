const handleFormatting = (event: any, block_id: number) => {
    const page = document.querySelectorAll('textarea');
    if(event.key == "Tab") {
        event.preventDefault();
        page[block_id]?.setRangeText(
            '\t',
            page[block_id].selectionStart,
            page[block_id].selectionEnd,
            'end'
        );
    }
}

export default handleFormatting