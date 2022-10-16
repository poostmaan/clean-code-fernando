type Sizes = '' | 'Small' | 'Medium' | 'Large'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Sizes = '',
    ) {}

    // * Realizar un serie de validaciones para entrada en el constructor
    isProductReady(): boolean {
        for (const key in this) {
            switch ( typeof this[key] ) {
                case 'string':
                    if( ( <string><unknown>this[key] ).length <= 0 ) throw Error(`${ key } is not valid`)
                    break;
                case 'number':
                    if( this[key] <= 0 ) throw Error(`${ key } is not valid`)
                    break;
                default:
                    throw Error(`${ this[key] } is not supported`)
                    break;
            }
        }

        return true;
    }

    toString() {
        if( this.isProductReady() ) return
        console.log( this.name )
    }
}

(() => {

    const newProduct = new Product('ad', 1, 'Small')
    newProduct.toString();

})();

