
let bookingString;

$(document).ready(function() {
    // Construct URL object using current browser URL
    var url = new URL('http://3.227.254.206:8090/events');

    // Get query parameters object
    var params = url.searchParams;

    // Get value of delivery results
    var results_delivery = params.get("eventname");

    // Set it as the dropdown value
    $("dropD").val(results_delivery);
});

$(function () {
    $('#content').on('click', function () {
        let dataString = {
            idevents: 0,
            eventdate: $('#eventdate').val(),
            eventstarttime: $('#eventstarttime').val(),
            eventmaxtickets: $('#eventmaxtickets').val(),
            genre: {
            eventname: $("#dropD").get(0).selectedIndex
            }
        }
        function maxCheck(x) {
            if (x <= 8) {
                return x + 1;
            }
        }

        bookingString = maxCheck(dataString.events.idevents)

        console.log(dataString.events.idevents = bookingString);
        $.ajax({
            url: 'http://3.227.254.206:8090/events',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(dataString),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            success: function (data) {
                console.log(data);
            },
            error: function (){
                $('#err').html("Oops, something went wrong!")
            }
        })
    });
});
