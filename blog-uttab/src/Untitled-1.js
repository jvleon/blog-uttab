import { Client } from 'dsteem'

import sc2 from 'steemconnect'

// init steemconnect
let api = sc2.Initialize({
    app: 'blog-uttab',
    callbackURL: 'http://localhost:3000',
    accessToken: 'access_token',
    scope: ['vote', 'comment'],
});

let opts = {};
//connect to community testnet
opts.addressPrefix = 'STX';
opts.chainId =
    '79276aea5d4877d9a25892eaa01b0adf019d3e5cb12a97478df3298ccdd01673';
//connect to server which is connected to the network/testnet
// const client = new Client('https://testnet.steem.vc', opts)




// get login URL
const link = api.getLoginURL();
const client = new Client('https://api.steemit.com')
const access_token = new URLSearchParams(document.location.search).get('access_token');
const username = new URLSearchParams(document.location.search).get('username');


export function logOut (){
    console.log('logout')
    api.revokeToken((err, res) => {
    alert('Sesion Cerrada' + err)
    })
}
function checkLogin () {
    if(access_token){
        setTimeout(() => document.getElementById('Login').innerHTML = `<span>Bienvenido ${username}</span><button onclick="(${() => submitPost()})">Nuevo post</button>` , 10)
        // setTimeout(() => document.getElementById('Login').innerHTML = `<button id="Login" type="button" class="iniciarsesion btn-success" onclick=(${logOut()})>Cerrar sesión</button>` , 10)
    } else {
        setTimeout(() => document.getElementById('Login').innerHTML = `<a id="Login" class="iniciarsesion btn-success" href="${link}" >Iniciar sesión</a>` , 10)
    }
}
function fetchBlog() {
    const query = {
        tag: 'bloguttab',
        limit: 5,
    }
    client.database
        .getDiscussions('created', query)
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

function submitPost () {
    console.log(client)
    //get account name
    const account = username
    //get title
    const title = 'prueba blog uttab'
    //get body
    const body = 'contenido de la prueba'
    //get tags and convert to array list
    const tags = 'bloguttab'
    //make simple json metadata including only tags
    const json_metadata = JSON.stringify({ tags: taglist });
    //generate random permanent link for post
    const permlink = Math.random()
        .toString(36)
        .substring(2);
        //broadcast post to the testnet
    client.broadcast
    .comment(
        {
            author: account,
            body: body,
            json_metadata: json_metadata,
            parent_author: '',
            parent_permlink: taglist[0],
            permlink: permlink,
            title: title,
        },
        privateKey
    )
    .then(
        function(result) {
            document.getElementById('myapp').value = result;
        },
        function(error) {
            console.error(error);
        }
    );
}


window.onload = fetchBlog()
window.onload = checkLogin()
