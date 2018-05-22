$(function () {
    //远程筛选
    $("#powerset").select2({
        ajax: {
            url : 'http://localhost:3010/collector/getByname',
            dataType: 'jsonp',
            delay: 50,
            jsonp:'callback',
            jsonpCallback:'jsonpCallback',
            data: function (params) {
                return {
                    collectorName: params.term, // search term
                };
            },
            processResults: function (data, params) {
                return {
                    results: data
                };
            },
            cache: true
        },
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 1,
        templateResult: formatRepo, // omitted for brevity, see the source of this page
        templateSelection: function formatRepoSelection(repo){return repo.text} // omitted for brevity, see the source of this page
    });
});

function formatRepo (repo) {
   return repo.text;
}

function jsonpCallback(json){
  console.log(json);
}