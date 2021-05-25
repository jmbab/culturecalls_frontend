$(document).ready(function () {
    $.ajax({

        url: "http://3.227.254.206:8090/events",
        success: function (result) { //success = boolean
            console.log(result);
            let tableContent = "";

            $.each(result, function (key, value) {
                tableContent += "<tr>";
                tableContent +=
                    "<td>" + value["idevents"] +
                    "</td>" + "<td>" + value["eventname"] +
                    "<td>" + value["eventdate"] +
                    "</td>" + "<td>" + value["eventstarttime"] +
                    "<td>" + value["entendtime"] +
                    "</td>" + "<td>" + value["eventprice"] +
                    "<td>" + value["eventlocation"] +
                    "</td>" + "<td>" + value["eventmaxtickets"] +
                    "<td>" + value["eventcategory"]
            });
            tableContent += "</tr>";
            $('#tbl tbody').html(tableContent)
        }
    });
});



