const button = document.querySelector(".button");
const main = document.querySelector(".main");

    saveNotes = ()=>{
   const notes = document.querySelectorAll(".container textarea")
   console.log("notes")
   const data = [];
   notes.forEach((note)=>{
 data.push(note.value)
 

   })
 if(data.length === 0){
    localStorage.removeItem("notes")
 }else{
    localStorage.setItem("notes",JSON.stringify(data))
 }
   

   }
    
button.addEventListener("click",function(){
   
addNote();
})


const addNote=(text = "")=>{
    const note = document.createElement("div");
    note.classList.add("container");
    note.innerHTML = `<div class="header">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <h5>NotePad!</h5>
    <i class=" delete fa-solid fa-trash"></i>
</div>
<textarea>${text}</textarea>`;
note.querySelector(".delete").addEventListener("click",function(){
    note.remove();
    saveNotes()
})
note.querySelector(".save").addEventListener("click",function(){
    saveNotes()

})
note.querySelector("textarea").addEventListener(
    "focusout",
    function(){
        saveNotes();
    }
)
main.appendChild(note)
saveNotes()
}
//self calling function
(
    function(){
        const isNotes = JSON.parse(localStorage.getItem("notes"));
        if(isNotes === null){
            addNote()

        }else{
            
     
        isNotes.forEach(
            (isNote)=>{
                addNote(isNote)
            }
        )
       
    }
    }
)()