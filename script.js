const textarea = document.getElementById("text-area");
const fileName = document.querySelector(".file-name input");
const fileType = document.querySelector(".save-as select");
const saveBtn = document.getElementById("save");
const btnTypeShow = document.getElementById("show-type"); //span inside save btn

//changing the save buttons content according to the file type
fileType.onchange = () => {
  //getting the selected file type
  let F_type = fileType.options[fileType.selectedIndex].text;
  const data = F_type.split(" ");
  btnTypeShow.innerHTML = data[0]+" "+data[1];

};

saveBtn.onclick = () => {
  // const blob = new Blob(blobContent, Mime-type); //syntax for Blob object
  const blob = new Blob([textarea.value], { type: fileType.value });
  //URl.createObjectURL creates a url that represent passed object
  const fileURL = URL.createObjectURL(blob);
  const link = document.createElement("a"); //create ancor tag
  link.download = fileName.value; //passing the filename as download
  link.href = fileURL; //passing the download link to href
  link.click(); //automatically click the ancor link
};
