function filterTable() {
      var input = document.getElementById("searchInput");
      var filter = input.value.toLowerCase();
      var table = document.getElementById("dataTable");
      var tr = table.getElementsByTagName("tr");
      var noResult = document.getElementById("noResult");
      var visibleCount = 0;

      for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        var match = false;

        for (var j = 0; j < td.length; j++) {
          if (td[j]) {
            var textValue = td[j].textContent || td[j].innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
              match = true;
              break;
            }
          }
        }

        if (match) {
          tr[i].style.display = "";
          visibleCount++;
        } else {
          tr[i].style.display = "none";
        }
      }

      if (visibleCount === 0) {
        noResult.style.display = "block";
      } else {
        noResult.style.display = "none";
      }
    }

    document.getElementById("searchInput").onkeyup = filterTable;