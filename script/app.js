window.onload = function () {

    let xhr = new XMLHttpRequest();
    let dataFile = "data/data.json";
    let posts;
    let attractions = document.querySelector('.attractions');
    
    xhr.open("GET", dataFile, false);
    xhr.send();
    
    if (xhr.status == 200 && xhr.readyState == 4) {
        posts = JSON.parse(xhr.responseText);
        showPosts();
        
    }
    
    
    function showPosts() {

        posts.forEach((post, index) => {
        
            let article = `
                <article class="showplace" tabindex="0">
                    <figure class="showplace__figure">
                        <img src="${post.img}" alt="${post.alt}">
                        <figcaption class="showplace__figcaption">
                            <h3 class="showplace__title">${post.title}</h3>
                        </figcaption>
                    </figure>
                    <p class="showplace__description">${post.content}</p>
                </article>  
            `;

            attractions.innerHTML += article;
        });

        let showplaceFig = document.querySelectorAll('.showplace__figure');

        showplaceFig.forEach((figure, index) => {
            if ((index % 2) == 1) {
                figure.classList.add('flex-order', 'rotate-4');
            }
        });
    }
     
};
