 $(function() {
    $( "#powerset" ).autocomplete({
      source: "http://localhost:3010/collector/getByname",
      minLength: 2,
      select: function( event, ui ) {
        console.log(ui.item ?
          "Selected: " + ui.item.value + " aka " + ui.item.id :
          "Nothing selected, input was " + this.value );
      }
    });
  });