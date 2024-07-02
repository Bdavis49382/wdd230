const day = new Date().getDay() 
// Monday, Tuesday, or Wednesday
if(day > 0 && day < 4) {
    // Create Banner
    const banner = document.createElement('div');
    banner.setAttribute('id','banner');

    // Add text
    const text = document.createElement('span');
    text.textContent = "Urithiru chamber of commerce will be hosting a meet and greet on Wednesday at 7:00 PM. We hope to see you there!"
    banner.appendChild(text);

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    closeButton.addEventListener('click',() => {
        banner.setAttribute('id','closed-banner');
    });
    banner.appendChild(closeButton);


    document.querySelector('main').appendChild(banner);
}