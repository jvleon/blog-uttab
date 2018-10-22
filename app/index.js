import { Client } from 'dsteem'

import sc2 from 'steemconnect'

// init steemconnect
let api = sc2.Initialize({
    app: 'blog-uttab',
    callbackURL: 'http://localhost:8080',
    accessToken: 'access_token',
    scope: ['vote', 'comment'],
});
// get login URL
let link = api.getLoginURL();
console.log(link)
const client = new Client('https://api.steemit.com')

let access_token = new URLSearchParams(document.location.search).get(
    'access_token'
);
let username = new URLSearchParams(document.location.search).get('username');
console.log(access_token, username)
function fetchBlog() {
    const query = {
        tag: 'steemitblog',
        limit: 5,
    }
    client.database
        .getDiscussions('blog', query)
        .then(result => {
            var posts = []
            console.log(result)
            result.forEach(post => {
                const json = JSON.parse(post.json_metadata)
                const image = json.image ? json.image[0] : ''
                const title = post.title
                const author = post.author
                const body = post.body
                const created = new Date(post.created).toDateString()
                posts.push(
                   `<section class="cuadro1">
					    <img class="fotoperfil" src="app/img/admin1.jpg" width="120" height="100" >
                        <h2 class="nombreusuario">${author}</h2>	
                        <h2>${title}</h2>
                        <p class="descripcion ">${body}</p>
                        <button class="btn1">Me Gusta</button>
                        <input type="button" value="No me Gusta" name="nolike" class="no-like btn-primary">
                        <a class="comentarios" href="#">Comentarios <span class="badge">42</span></a>
	    			</section>`
                    // `<div class="list-group-item"><h4 class="list-group-item-heading">${title}</h4><p>by ${author}</p><center><img src="${image}" class="img-responsive center-block" style="max-width: 450px"/></center><p class="list-group-item-text text-right text-nowrap">${created}</p></div>`
                )
            })

            document.getElementById('myapp').innerHTML = posts.join('')
        })
        .catch(err => {
            alert('Error occured' + err)
        })
}

window.onload = fetchBlog()
