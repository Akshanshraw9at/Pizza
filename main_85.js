menu_list_array = ["Cheese_burst",
"Aussie",
"Margherita",
"Cheese N Corn Pizza",
"BBQ Chicken Pizza",
"Pepperoni Pizza",
"Paneer Makhni Pizza",
"New_York_Style",
"Sicilian" ,
"California" ,
"Detroit" ,
"St_Louis"];  

function getmenu()      
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

