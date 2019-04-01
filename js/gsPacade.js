/**
 * Restore a car information in JSON with the max+1 number of local storage length
 */
function saveCar() {
    if(gsDoValidate_gsFrmCar()){

        var storageKey=(localStorage.length)+1;
        var storageKeyString=storageKey.toString();

        console.info("Review Added successfully");
        var car={
            sellerName: $("#gsSellerName").val(),
            address: $("#gsAddress").val(),
            city: $("#gsCity").val(),
            email: $("#gsEmail").val(),
            phone: $("#gsPhoneNumber").val(),
            make: $("#gsMake").val(),
            model: $("#gsModel").val(),
            year: $("#gsYear").val()};

        var cars=JSON.stringify(car);
        localStorage.setItem(storageKeyString, cars);

        $(location).prop('href', 'carView.html?');
    }else{
        console.error("Adding Review failed");
    }
}
function gsShowCarList() {
    var htmlCode="";
    htmlCode="<h1>List of Car</h1>" +
                    "<Table><tr>" +
                    "<td>Seller Name</td>" +
                    "<td>Address</td>" +
                    "<td>City</td>" +
                    "<td>Email</td>" +
                    "<td>Phone Number</td>" +
                    "<td>Vehicle Make</td>" +
                    "<td>Vehicle Model</td>" +
                    "<td>Vehicle Year</td>" +
                    "<td>JD Power Link</td>" +
                    "</tr>";
    for (var i = 0; i < localStorage.length; i++){
         var car=JSON.parse(localStorage.getItem(localStorage.key(i)));
         htmlCode +="<tr>"+
             "<td>"+ car["sellerName"]+"</td>"+
             "<td>"+ car["address"]+"</td>"+
             "<td>"+ car["city"]+"</td>"+
             "<td>"+ car["email"]+"</td>"+
             "<td>"+ car["phone"]+"</td>"+
             "<td>"+ car["make"]+"</td>"+
             "<td>"+ car["model"]+"</td>"+
             "<td>"+ car["year"]+"</td>"+
             "<td><a href='https:/www.jdpower.com/cars/"+car["make"]+"/"+car["model"]+"/"+car["year"]+"' id='gsLinkList'>go</a></td></tr>";
    }
    htmlCode +="</table>";
    var lv=$("#gsListTable");
    lv=lv.html(htmlCode);
}