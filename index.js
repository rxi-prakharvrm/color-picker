
document.getElementById('colorpicker').onchange = function() {
    let colorValue = document.getElementById('colorpicker').value;
    document.getElementById('color-hex-value').value = colorValue;
    document.body.style.backgroundColor = colorValue;
}
