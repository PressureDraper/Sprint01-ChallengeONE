function rules(e) {
    let key = e.which;

    // Allows only lowercase letters and space
    patron = /[a-z ]/;
    final_key = String.fromCharCode(key);
    return patron.test(final_key);
}