export default (font: string, callback: (fontFace: FontFace[]) => void) =>
    // load specified Font in to memory
    document.fonts.load(font)
        .then(fontFaces =>
            // make sure the font IS loaded
            document.fonts.check(font) &&
                // run callback
                callback(fontFaces)
        )
        .catch(console.error);
