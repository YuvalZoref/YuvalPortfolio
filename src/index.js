// ----- about me function -------------

// const tablinks = document.getElementsByClassName("tab-links");
// const tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabName){
//   for(const tablink of tablinks){
//     tablink.classList.remove("active-link");
//   }
//   for(const tabcontent of tabcontents){
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabName).classList.add("active-tab");
// }



// ---------- menu for header ------------

/* <script>
const sidemenu = document.getElementById("sidemenu")

function openmenu(){
  sidemenu.style.right = "0"
}
function closemenu(){
  sidemenu.style.right = "-200px"
}
</script> */


// ---------- contact email --------------

/* <script>
const scriptURL = "https://script.google.com/macros/s/AKfycbyC2Vl_qbKq4DoUIjRKXKIOucjWUNeou-Bvj2Nq9EgQN8wIjyetXySMBgYhbVaUssgF/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
</script> */
