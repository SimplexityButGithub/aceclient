

let alert2 = "Website made with JS";

console.log("Welcome to the JS Console!");

window.alert(alert2);


<script>
function copyToClipboard() {
 textBox = document.querySelector('.dark-textbox');
  textBox.select();
  textBox.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Code copied to clipboard!');

}
</script>