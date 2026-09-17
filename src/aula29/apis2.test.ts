// import { test, expect } from 'vitest';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// test('Metodo POST para criar um novo post', async () => {
//     const res = await fetch(`${BASE_URL}/posts`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             userId: 1,
//             title: 'Meu novo post',
//             body: 'Conteudo do meu novo post'
//         })
//     })
//      // Testas status code
//         expect(res.status).toBe(201)
//     // Testa se o retorno é um objeto
//         const dados = await res.json()
//         expect(dados.title).toBe('Meu novo post')
//         expect(dados.body).toBe('Conteudo do meu novo post')
// })



//  import { test, expect } from 'vitest';

//  const BASE_URL = 'https://jsonplaceholder.typicode.com';

//  test('Metodo PUT para editar completamente um post', async () => {
//      const res = await fetch(`${BASE_URL}/posts/1`, {
//          method: 'PUT',
//          headers: {
//              'Content-Type': 'application/json'
//          },
//          body: JSON.stringify({
//              id: 1,
//              userId: 1,
//              title: 'Atualizando meu post usando PUT',
//              body: 'Este e o novo conteudo completo do meu post'
//          })
//      })

//      // Testa status code
//      expect(res.status).toBe(200)

//      // Testa os dados retornados
//      const dados = await res.json()

//      expect(dados.title).toBe('Atualizando meu post usando PUT')
//      expect(dados.body).toBe('Este e o novo conteudo completo do meu post')
//  })


 import { test, expect } from 'vitest';

 const BASE_URL = 'https://jsonplaceholder.typicode.com';

 test('Metodo PATCH para alterar o titulo de um post', async () => {
     const res = await fetch(`${BASE_URL}/posts/1`, {
         method: 'PATCH',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             title: 'Alterando apenas o titulo com PATCH'
         })
     })

     // Testa status code
     expect(res.status).toBe(200)

     // Testa os dados retornados
     const dados = await res.json()

     expect(dados.title).toBe('Alterando apenas o titulo com PATCH')
 })

 test('Metodo DELETE para DELETAR um post', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'DELETE',
    })
    // TESTA STATUS CODE
    expect(res.status).toBe(200)
 })