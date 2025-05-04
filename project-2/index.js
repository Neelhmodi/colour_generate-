const getcolor = () =>{
    const randomNumber =Math.floor(Math.random()*16777215);
    const randomCode = `#${randomNumber.toString(16)}`;
    document.body.style.backgroundColor = randomCode;
    document.getElementById("Hasecode").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}

// initcial call
getcolor();

const Button = document.getElementById("btn");
Button.addEventListener('click' , getcolor);
