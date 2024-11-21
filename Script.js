                  //   PART - 01   //

function startingWithVowel(inputString) {
    const vowels = 'aeiouAEIOU';
  
    return inputString
      .split(' ')
      .filter(word => vowels.includes(word[0])) 
      //.map(word => word.toLowerCase());  
  }
  
  const inputString = "The journey of life is not defined by the destination, but by the experiences and growth along the way.";
  const result = startingWithVowel(inputString);
  console.log(result);  



                   //   PART - 02   //



//console.log("error")

const element = document.getElementById("Heading");
element.innerHTML = "My Name is Syed Moeez Ali. I am recently Graduated From University of Central Punjab."


const color1 =()=>{
    document.body.style.backgroundColor = 'red'
} 
const color2 =()=>{
    document.body.style.backgroundColor='yellow'
}
const color3 =()=>{
    document.body.style.backgroundColor='green'
}
const color4=()=>{
    document.body.style.backgroundColor='blue'
}
const changetext=()=>{
    document.getElementById('changed').innerHTML= 'You Hit me Hard...!!'
}

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}
function mOver(obj) {
    obj.innerHTML = "Thank You"
}
  
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}
document.getElementById('chnge').addEventListener('click', changetext);
document.getElementById('red').addEventListener('click', color1);
document.getElementById('yellow').addEventListener('click', color2);
document.getElementById('green').addEventListener('click', color3);
document.getElementById('blue').addEventListener('click', color4);
