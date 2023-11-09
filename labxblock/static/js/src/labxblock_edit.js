function LabEditBlock(runtime, element) {

    $.ajax({
        type: "GET",
        url: runtime.handlerUrl(element, 'result_lab'),
        success: function(data) {
            const textarea = $(element).find('textarea[name=result-lab]')
            textarea.val(data.result); 
    }
    });


    $('.save-button' , element).click(function(event){
        const handlerUrl = runtime.handlerUrl(element, 'result_lab');
        const value = $(element).find('textarea[name=result-lab]').val()
        const formData = new FormData();
        formData.append('result_lab', value)
        $.ajax({
          type: "POST",
          url: handlerUrl,
          data: formData,
          processData: false,  
          contentType: false, 
          success: function(data) {
        runtime.notify('cancel', {});
         
      }
      });
    })

  
   $('.cancel-button', element).click(function (event){
    console.log('======')
    runtime.notify('cancel', {});
   })

  }