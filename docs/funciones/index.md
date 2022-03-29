# Funciones

## Validación

### validateRut()

La función **validateRut(**) devuelve un valor booleano de acuerdo al RUT proporcionado.

Verifica el [formato](/conceptos/formato) y el dígito verificador. Si estos son válidos, devuelve **true**, en el caso contrario **false**.

````javascript
validateRut("10-8") // true
validateRut("12.348-K") // true
validateRut("260.222-9") // true
validateRut("1.091.397-7") // true
validateRut("13.537.201-3") // true
validateRut("111.111.111-1") // false
````

## Formato

### formatRut()

La función **formatRut()** devuelve un RUT de acuerdo al [formato](/conceptos/formato).

````javascript
formatRut("11111111") // 1.111.111-1
formatRut("111111111") // 11.111.111-1
````

## Sanitización

Puedes sanitizar un RUT de dos maneras:

### sanitiseRut()

La función **sanitiseRut()** devuelve un RUT sin formato. Mantiene solo números y el carácter "K/k".

````javascript
sanitiseRut("11.111.111-1") // 111111111
sanitiseRut("19.997.050-K") // 19997050K
````

### fullySanitiseRut()

La función **fullySanitiseRut()** devuelve un RUT sin formato. Mantiene solo números.

````javascript
fullySanitiseRut("11.111.111-1") // 111111111
fullySanitiseRut("19.997.050-K") // 19997050
````

## Generación

Puedes generar RUTs aleatorios de manera individual o masiva. Para opciones de formato, puedes pasar un objeto **genOpts** a la función.

### generateRut()

La función **generateRut()** devuelve un RUT aleatorio y válido. Toma un objeto opcional, el cual determina si el RUT se
retorna con separadores de miles y/o un guión. Por defecto, estas opciones son verdaderas.

````javascript
const genOpts = {
    dots: false, // Si el RUT tendrá puntos como separador de miles.
    hyphen: true // Si el RUT tendrá un guión entre el número correlativo y el dígito verificador.
}

const rut = generateRut(genOpts) // string
````

### generateMulRut()

La función **generateMulRut()** devuelve un array de RUTs aleatorios y válidos.

Toma un objeto opcional, el cual determina la cantidad de RUTs a generar, y si estos retornan con separadores de miles
y/o guión.

Por defecto, la cantidad de RUTs a crear es 30 y las opciones de formato son verdaderas.

````javascript
const genOpts = {
    count: 100, // El número de RUTs a generar
    dots: false, // Si el RUT tendrá puntos como separador de miles.
    hyphen: true // Si el RUT tendrá un guión entre el número correlativo y el dígito verificador.
}

const ruts = generateMulRut(genOpts) // []string
````

## Dígito de verificación

### getCheckDigit()

La función **getCheckDigit()** devuelve el dígito verificador de un RUT. Un carácter calculado de acuerdo a un algoritmo
basado en módulo 11.

````javascript
const rut = "11.111.111-1"
const rutToPass = rut.slice(0, -1) // No incluimos el último carácter

const confirmedDigit = getCheckDigit(rutToPass) // 1
````

