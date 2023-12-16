const popup = document.querySelector("#show");

      setTimeout(show, 3000);

      function show() {
        popup.style.display = "block";
      }

      $(document).ready(() => {
        $("#close").click(() => {
          $("#show").hide(2000);
        });
      });