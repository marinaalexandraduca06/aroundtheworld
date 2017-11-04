function changeBackground() {
    document.getElementById('topBar').style.backgroundColor = 'pink';
    setTimeout(()=>{document.getElementById('topBar').style.backgroundColor = 'green';}, 5000);
}