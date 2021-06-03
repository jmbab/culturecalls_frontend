$(document).ready(function (){

    let id;

    $(document).on('click', ".deletebtn", function (e) {
        e.preventDefault();
        const test = window.confirm("Confirm deletion?")

        let arr = [];
        if (test) {
            $(this).closest('tr').remove()

             id = $(this).closest('tr').find("td:first").text()

            console.log(id)
            console.log(arr)
            $.ajax({
                url: "http://3.227.254.206:8090/events/" + id,
                type: 'DELETE',
                success: function (data) {
                    console.log(data)
                },
                error: function (data) {
                    console.log("error: " + data)
                }
            })
        }
    });

    $(function () {
        $.ajax({
            url: "http://3.227.254.206:8090/events",
            success: function (result) {
                console.log(result)
                let tableRows = "";
                $.each(result, function (key, val) {
                    tableRows += "<tr>";
                    tableRows +=
                        "<td>" + val["evtId"] +
                        "</td><td>" + val["evtName"] +
                        "</td><td>" + val["evtDate"] +
                        "</td><td>" + val["evtTime"] +
                        "</td><td>" + val["evtPrice"] +
                        "</td><td>" + val["evtLocation"]["locId"] +
                        "</td><td>" + val["evtLocation"]["locName"] +
                        "</td><td>" + val["evtTickets"] +
                        "</td><td>" + val["evtCategory"]["catName"] +
                        "</td><td>" +
                        "<input type='image' src='../assets/trash.jpg' style='width:20px' alt='Delete' id='img' " +
                        "class='deletebtn' data-id='" + val["bookingId"] + "'>" +
                        "</td>"
                });
                tableRows += "</tr>";
                $('#tbl tbody').html(tableRows)
            }
        })
    })
})



