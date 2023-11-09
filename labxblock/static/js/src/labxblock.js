function LabXBlock(runtime, element) {
    // Function to handle the AJAX request for file upload information
    function handleFileUpload(data) {
        const result_lab = data.result_lab;
        const link = data.url;
        if (link.length > 0) {
            const text = `
                <div>
                    <a href='${link}' target='_blank'>Download</a>
                    <p>Result: ${result_lab}</p>
                </div>`;
            $(".form-upload", element).css("display", "none");
            $(".labfunix_block", element).html(text);
        }
    }

    // Initial AJAX request for file upload information
    $.ajax({
        type: "GET",
        url: runtime.handlerUrl(element, 'upload'),
        success: handleFileUpload
    });

    // Click event handler for the upload button
    $("#btn-upload", element).click(function (event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", $("#fileInput")[0].files[0]);
        formData.append('type', 'lab');
        
        // AJAX request for file upload
        $.ajax({
            type: "POST",
            url: runtime.handlerUrl(element, 'upload'),
            contentType: false,
            processData: false,
            data: formData,
            success: handleFileUpload
        });
    });
}