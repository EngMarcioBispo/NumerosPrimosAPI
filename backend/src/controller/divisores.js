const yup = require('yup')
const divisores = async (req, res) => {
    const {
        entrada
    } = req.params;


    let arrayDivisores = [];
    let arrayPrimos = [];

    const schema = yup.object().shape({
        entrada: yup.number().integer()
    });

    try {
        await schema.validate(req.params);


        function numerosDiveres(divisor) {
            for (let contadorDivisor = 1; contadorDivisor <= divisor; contadorDivisor++) {
                if (divisor % contadorDivisor === 0) {
                    arrayDivisores.push(contadorDivisor)
                }
            }
        }

        function arrayNumerosPrimos(primos) {
            for (let contadorDivisor of primos) {
                if (numeroPrimo(contadorDivisor)) {
                    arrayPrimos.push(contadorDivisor)
                }
            }
        }

        function numeroPrimo(primo) {
            for (let contadorPrimo = 2; contadorPrimo < primo; contadorPrimo++) {
                if (primo % contadorPrimo === 0) {
                    return false;
                }
            }
            return true;
        }

        function exibirResultadoNumerosDivisores() {
            arrayNumerosPrimos(arrayDivisores)
        }

        function exibirResultadoDiviresPrimos() {
            numerosDiveres(entrada)
        }


        if (entrada) {
            exibirResultadoDiviresPrimos()
            exibirResultadoNumerosDivisores()
        }

        return res.status(200).json({
            "divisores": arrayDivisores,
            "primos": arrayPrimos
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = divisores;