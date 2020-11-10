
 
  $('#addMatRow').click(function () {
    addMatItem();
});
  function addMatItem() {
   
    var MatitemRow =
    '<div class="form-group row">'+
        '<div class="col" style=" max-width: 3%;" >'+
            ' <div class="form-control" name="MatNr"> '+
            '<input type="text" value=" " />'+
            '</div>'+
        '</div>'+

        '<div class="col" style=" max-width: 13%;" >'+
            '<div class="form-control" name="CodArticol">'+
            '<input type="text" value=" " />'+
            '</div>'+
        '</div>'+

        '<div class="col" style=" max-width: 30%;" >'+
            '<div class="form-control" name="MatDesc">'+
            '<input type="text" value=" " />'+
            '</div>'+
        '</div>'+

        '<div class="col" style=" max-width: 10%;" >'+
            '<div class="form-control"style=" text-align: center;" name="UM">'+
            '<input type="text" value=" " />'+
            '</div>'+
        '</div>'+

        '<div class="col" style=" max-width: 5%;" >'+
            '<div class="form-control MatCant"style=" text-align: center;"  name="MatCant">'+
            '<input type="text" value="" />'+
            '</div>'+
        '</div>'+

        '<div class="col" style=" max-width: 13%;" >'+
            '<div class="form-control pfTVA"style=" text-align: end;" name="pfTVA" >'+
            '<input type="text" value="" />'+
            '</div>'+
        '</div>'+

        '<div class="col" style=" max-width: 13%;" >'+
            '<div class="form-control MatvalfTVA"style=" text-align: end;" name="MatvalfTVA"></div>'+
        ' </div>'    +

        '<div class="col" style=" max-width: 13%; text-align: end;" >'+ 
            '<div class="form-control MatvalcuTVA"style=" text-align: end;" name="MatvalcuTVA"></div>'+
        '</div>'+
        '<div class="col" style=" max-width: 5%;" >'+
            '<div class="btn-remove">'+
                     '<Button > &#10010;</Button>'+
            '</div>'+
        '</div>'+

        '</div>';
    
    $("#material-details").append(MatitemRow);
}




$('#addManRow').click(function () {
    addManItem();
});
  function addManItem() {
   
    var ManitemRow =

            '<div class="form-group row">'+
            '<div class="col" style=" max-width: 3%;" >'+
                '<div class="form-control" name="ManNr"></div>'+
            '</div>'+

            '<div class="col" style=" max-width: 20%;" >'+
                '<div class="form-control"name="ManDesc"></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 14%;" >'+
                '<div class="form-control" name="Mecanic"></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 8%;" >'+
                '<div class="form-control"name="Norma"style=" text-align: end;" ></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 8%;" >'+
                '<div class="form-control" name="Tarif"style=" text-align: end;"  ></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 5%;" >'+
                '<div class="form-control" name="ManCant" style=" text-align: center;"></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 13%;" >'+
                '<div class="form-control" style=" text-align: end;" name="totalNorma"></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 13%;" >'+
                '<div class="form-control" style=" text-align: end;"  name="ManvalfTVA"></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 13%;" >'+
                '<div class="form-control" name="ManvalcuTVA"style=" text-align: end;" ></div>'+
            '</div>'+
            '<div class="col" style=" max-width: 5%;" >'+
                '<div class="btn-remove">'+
                    '<Button>&#10010;</Button>'+
                '</div>'+
            '</div>'+
        '</div >';

$("#manopera-details").append(ManitemRow);
}





