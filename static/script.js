const resumeBtn= document.querySelector("#resume-btn");
const githubBtn= document.querySelector("#github-btn");
const gfgBtn = document.querySelector("#gfg-btn");
const linkedinDiv= document.querySelector(".linkedin");
const emailDiv= document.querySelector(".email");
const instaDiv= document.querySelector(".insta");
const xTwitterDiv= document.querySelector(".x-twitter");

resumeBtn.addEventListener("click",()=>{
  window.open("https://mega.nz/folder/6Zc1USDL#8uc-HhPIM0Ky-N-ACc-ZRA","_blank");
});

githubBtn.addEventListener("click",()=>{
  window.open('https://github.com/rahulrawatgujjar', '_blank');
});

gfgBtn.addEventListener("click",()=>{
  window.open("https://auth.geeksforgeeks.org/user/rahulrawatr320","_blank");
});

linkedinDiv.addEventListener("click",()=>{
  window.open("https://www.linkedin.com/in/rahul-rawat-gujjar","_blank");
});

emailDiv.addEventListener("click",()=>{
  // window.open("mailto:rahulrawatr320@gmail.com?body=%0D%0A");
  window.location.href="mailto:rahulrawatr320@gmail.com?body=%0D%0A"
});

instaDiv.addEventListener("click",()=>{
  window.open("https://www.instagram.com/rahul.rawat.rrg/","_blank");
});

xTwitterDiv.addEventListener("click",()=>{
  window.open("https://x.com/RahulRa02228239","_blank");
});