menu_list_array = ["Crying Johnny(veg)",
                        "Veggie Party(veg)",
                        "Cheesy Chat(veg)",
                        "Smokey 'n' Cheesy Porky Pie(non-veg)",
                        "Meaty Party(non-veg)",
                        "Paneer 'n' Chicken Delight(non-veg)"];
    
    function getmenu(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu 
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="https://assets.box8.co.in/default-picture-shape/web/product/845">
        <img id="im1" src="https://assets.box8.co.in/default-picture-shape/web/product/854">
            <img id="im1" src="https://assets.box8.co.in/default-picture-shape/web/product/854"></img>'
        var item=document.getElementById("add_item").value;
       menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
