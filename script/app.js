window.onload = function () {

    var xhr = new XMLHttpRequest();
    var dataFile = "data/data.json";
    var posts;
    var attractions = document.querySelector('.attractions');
    
    xhr.open("GET", dataFile, false);
    xhr.send();
    
    if (xhr.status == 200 && xhr.readyState == 4) {
        posts = JSON.parse(xhr.responseText);
        showPosts();
        
    }
    
    
    function showPosts() {
        for (let i = 0; i < posts.length; i++) {

            const post = posts[i];
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

            attractions.appendChild(article);

            

            var showplace = document.createElement('article');
            var showplaceFig = document.createElement('figure');
            var showplaceFigCap = document.createElement('figcaption');
            var showplaceFigTitle = document.createElement('h3');
            var showplaceImg = document.createElement('img');
            var showplaceContent = document.createElement('p');
            
            showplace.classList.add('showplace');
            showplace.setAttribute('tabindex', '0');

            showplaceFig.classList.add('showplace__figure');

            if ((i % 2) == 1) {
                showplaceFig.classList.add('flex-order');
                
                showplaceFig.classList.add('rotate-4');
            }

            showplaceImg.setAttribute('src', post.img);
            showplaceImg.setAttribute('alt', post.alt);
            
            showplaceFigCap.classList.add('showplace__figcaption');

            showplaceFigTitle.classList.add('showplace__title');
            showplaceFigTitle.textContent = post.title;
            
            showplaceContent.classList.add('showplace__description');
            showplaceContent.textContent = post.content;
            
            showplaceFig.appendChild(showplaceImg);
            showplaceFig.appendChild(showplaceFigCap);

            showplaceFigCap.appendChild(showplaceFigTitle);

            showplace.appendChild(showplaceFig);
            showplace.appendChild(showplaceContent);

            attractions.appendChild(showplace);
        }
    }
     
}
