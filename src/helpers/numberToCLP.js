
function numberToCLP(number) {
    return new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(number)
}

export default numberToCLP
