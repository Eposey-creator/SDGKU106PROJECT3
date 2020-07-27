//------------------------------------Table (Select Function)-----------------------------------//
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
//-----------------------------------Table Function--------------------------------------------//
  function myFunction() {
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
   
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
         
        }
      }
    }
  }
//--------------------------------------------------------------------------------------------//

//----------------------------------Table(Delete Function)------------------------------------//

  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);

    console.log ('ThisProduct has been removed from your Wish List');
  }
//-------------------------------------------------------------------------------------------//

//-----------------------------------Add New Wish List Function--------------------------------------//
 function addListItem(){
   var text= $("#new-text").val();
   $("#todolist").append('<li>'+text+'</li>')
   $("#new-text").val('');

}
  
  $ (function(){
      $("#add").on('click',addListItem);

  })

  //------------------------------------------------------------------------------------------//