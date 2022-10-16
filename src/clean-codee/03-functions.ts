//! Cuando creas la funcion esto son parametros de la funcion
function sendEmail( toWhom: string): boolean {
    // Verificar correo valido
    if( !toWhom.includes('@')) return false;

    return true;
}

// ! Cuando usas la funcion son argumentos

sendEmail('rodri@google.com')

/**
 * ! LIMITAR LOS PARAMETROS DE LAS FUNCIONES A 3 PARAMETROS POSICIONALES
 */

interface SendEmailOptions {
    from: string,
    to: string,
    toWhom: string,
}

function sendEmail2({ from, to, toWhom}: SendEmailOptions): boolean {
    let nothing = from + to + toWhom;
    return true;
}

/**
 * * TAREAS
 */

 (() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getActorsInfoByMovieId( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBiography( actorId: string ) {
        console.log({ actorId });
    }
    
    interface CreateMovieRules {
        cast: string[];
        description: string; 
        rating: number;
        title: string;
    }

    // Crear una película
    function createMovie({ title, description, rating, cast }: CreateMovieRules ): boolean {
        console.log({ title, description, rating, cast });
        return true
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // * Continuacion

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500; 
        
        return isRetired ? 3000 : 4000; 
    }

})();
