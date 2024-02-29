const resumeBtn= document.querySelector("#resume-btn");
const githubBtn= document.querySelector("#github-btn");

resumeBtn.addEventListener("click",()=>{
  window.open("/static/resume.pdf","_blank");
});

githubBtn.addEventListener("click",()=>{
  window.open('https://github.com/rahulrawatgujjar', '_blank');
});

