//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})
<script>
  // Function to announce the current day
  function announceDay(day) {
    var announcement = document.getElementById('screenreader-current-day');
    announcement.textContent = "Today is Day " + day + ". You can open the door for an accessibility tip!";
  }
</script>
