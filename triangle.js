function triangleArea(){
    // get the base 
    const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBase = triangleBaseInput.value
     const base = parseFloat(triangleBase)
    

    // get the height 
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeight = triangleHeightInput.value
    const height = parseFloat(triangleHeight)
     
    // calcolating area 
    const area = 0.5*base*height
    console.log(area);

    // display tha result 
    const resultOfTriangle = document.getElementById('triangle-result');
    resultOfTriangle.innerText= area;
}