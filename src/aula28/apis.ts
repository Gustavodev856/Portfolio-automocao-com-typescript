const BASE_URL = 'https://jsonplaceholder.typicode.com';
//definindo contratos de tipo
type Post = {
    userId: number;
    id?: number; //campo opcional
    title: string;
    body: string;
}

type Coment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

// GET /posts
async function listarPosts() {
    console.log(`--- 1. GET /posts ---`);
    const response = await fetch(`${BASE_URL}/posts`)
    const dados: Post[] = await response.json()
    console.log(`✅ Status: ${response.status}`);
    console.log(`Lidos ${dados.length} posts. Ex: do primeiro:`, dados[0].title);
}

// GET /posts/1
async function buscarPorId(id: number) {
    console.log(`--- 1. GET /posts ---`);
    const response = await fetch(`${BASE_URL}/posts/${id}`)
    const dados: Post = await response.json()
    console.log(`✅ Status: ${response.status}`);
    console.log(`Titulo do post ${id}:`, dados.title);
}


//GET /posts/1/comments
async function listarComent(postId: number) {
   console.log(`--- 1. GET /posts ---`);
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`)
    const dados: Coment[] = await response.json()
    console.log(`✅ Status: ${response.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentários. Ex: Email do primeiro comentario.`, dados[2].email); 
}




async function chamarReqs() {
    listarPosts();
    buscarPorId(3);
    listarComent(3)
}

chamarReqs()