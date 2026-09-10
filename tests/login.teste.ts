// importando dependeciais
import {test, expect, vi} from 'vitest';
//simulando login lento
function loginLento(usuario: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`BEM-VINDO, ${usuario}!`)
        }, 5000)
    })
}

test('Simular login usando fake timers', async () => {
    // ligando a maquina do tempo
    vi.userFakeTimers();
    console.log('⏳ INICIANDO CENÁRIO DE TESTE ;D');

    // chamando promisse de usuario sem await ainda
    const promessaLogin = loginLento("Dona redonda")

    //configura avanço de 5 segundos
    vi.advanceByTimers(5000)

    const resultado = await promessaLogin;

    //verificar resultado
    expect(resultado).toBe("BEM-VINDO, Dona Redonda!")

    console.log("Sucesso teste realizado na velocidade da luz");
    
    //desligando a maquina do tempo
    vi.useRealTimers()
})