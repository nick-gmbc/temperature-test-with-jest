function fahrenheitToCelicus(f) {
    let c = (f - 32) * 5/9;
    return c;
}

module.exports = { fahrenheitToCelicus };