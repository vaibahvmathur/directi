$(document).ready(function(){
    // Get the clicked module and perform certain action
    $('#menu-content li').click(function(){
        alert($(this).attr('class'))
    });
    // Function call to Populate main content
    list_generate(null);
    // If keyword searched
    $('#keyword').keyup(function(){
        var search_value = $(this).val();
        list_generate(search_value);
    });

});

//Function to pupulate Main content
function list_generate(search_value){
    // list of data to be populate ( can be read from backend )
    // type = 1 is IMAGE   and  type = 2 is Video
    var my_list = [
        {'type':1, 'src':'http://images.indianexpress.com/2016/06/game-of-thrones-season-6759.jpg', 'name':'Game Of Thrones'},
        {'type':1, 'src':'http://www.goliath.com/wp-content/uploads/2016/04/Big-Bang-Theory.jpg', 'name':'Big Bang Theory'},
        {'type':1, 'src':'https://cdn.pastemagazine.com/www/articles/silicon-valley.jpg', 'name':'Silicon Valley'},
        {'type':1, 'src':'https://i.ytimg.com/vi/jhZZb9WqX9k/maxresdefault.jpg', 'name':'Supernatural'},
        {'type':2, 'src':'https://www.youtube.com/embed/4kmA86_hnbo', 'name':'Supernatural'},
        {'type':2, 'src':'https://www.youtube.com/embed/nZ5tqzw841s', 'name':'Baywatch'},
        {'type':2, 'src':'https://www.youtube.com/embed/IjHgzkQM2Sg', 'name':'The Mummy'},
        {'type':1, 'src':'http://images.indianexpress.com/2016/06/game-of-thrones-season-6759.jpg', 'name':'Game Of Thrones'},
        {'type':1, 'src':'http://www.goliath.com/wp-content/uploads/2016/04/Big-Bang-Theory.jpg', 'name':'Big Bang Theory'},
        {'type':1, 'src':'https://cdn.pastemagazine.com/www/articles/silicon-valley.jpg', 'name':'Silicon Valley'},
        {'type':1, 'src':'https://i.ytimg.com/vi/jhZZb9WqX9k/maxresdefault.jpg', 'name':'Supernatural'},
        {'type':2, 'src':'https://www.youtube.com/embed/4kmA86_hnbo', 'name':'Supernatural'},
        {'type':2, 'src':'https://www.youtube.com/embed/nZ5tqzw841s', 'name':'Baywatch'},
        {'type':2, 'src':'https://www.youtube.com/embed/IjHgzkQM2Sg', 'name':'The Mummy'},
    ];

    //Empty the content div
    $('.my_items').empty();
    //Loop through each item in above list
    $.each(my_list, function(i, item) {
        var flag = 0;
        // Check if any search string
        if ( search_value != null ){
            // check if search sub string exist in list[name]
            if (item['name'].toLowerCase().indexOf(search_value.toLowerCase()) > -1) {
                // list[name] contains search sub string
                flag = 1
            }
            else{
                // list[name] dont contain search sub string
                flag = 0
            }
        }
        else{
            // No search string populate all data
            flag = 1
        }
        if (flag == 1){
            // Image populate
            if (item['type'] == 1) {
                $('.my_items').append('<div class="col-sm-3" style="height: 225px;">\
                          <div class="thumbnail">\
                            <a href=' + item["src"] + ' target="_blank">\
                              <img style="height: 150px;" src=' + item["src"] + ' alt="Eror !!" style="width:100%">\
                              <div class="caption">\
                                <p>' + item["name"] + '</p>\
                              </div>\
                            </a>\
                          </div>\
                        </div>')
            }
            // Video Populate
            else {
                $('.my_items').append('<div class="col-sm-3" style="height: 225px;">\
                          <div class="thumbnail">\
                            <a href=' + item["src"] + ' target="_blank">\
                              <iframe style="height: 150px;" width="100%" src=' + item["src"] + ' frameborder="0" allowfullscreen target="_blank"></iframe>\
                              <div class="caption">\
                                <p>' + item["name"] + '</p>\
                              </div>\
                            </a>\
                          </div>\
                        </div>')
            }
        }
    });
}