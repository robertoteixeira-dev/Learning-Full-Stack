const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({res: 'Sucesso!'});
    }, 2000);
});


// Primeira forma de pegar a resposta -Then / Catch
// Aqui o código não fica travado
apiCall
    .then((response) => {
    console.log(response);
})
    .catch((error) => {
        console.log(error);
    });

// Segunda forma - Async / await
// Aqui o código trava até o await ser finalziado 
async function run() {
    try {
        const resposta = await apiCall;
        console.log(resposta);
    } catch (error) {
        console.log(error);
    }
}



