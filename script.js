//your JS code here. If required.
const btn = document.getElementById('submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');

btn.addEventListener("click", function () {
	console.log(title.value)
	console.log(author.value)
	console.log(isbn.value)
    var table = document.getElementById("myTable");
	var row = table.insertRow(); // Add a row to the end of the table

    // Insert new cells (<td> elements)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add text to the new cells
    cell1.innerHTML = title.value;
    cell2.innerHTML = author.value;
    cell3.innerHTML = isbn.value;

    title.value = "";
    author.value = "";
    isbn.value = "";
});


