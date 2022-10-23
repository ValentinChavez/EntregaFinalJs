(async () => {
    const {value: pais}  = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Selecciona tu pais',
        icon: 'success',
        confirmButtonText: 'Seleccionar',
        footer: '<span class="rojo"> Esta informacion es importante</span>',
        padding: '1rem',
        backdrop: 'true',
        position: 'center',
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
    
        input: 'select',
        inputPlaceholder: 'Pais',
        inputValue: '',
        inputOptions: {
            Argentina: 'Argentina',
            Mexico: 'Mexico',
            Paraguay: 'Paraguay',
            Uruguay: 'Uruguay',
            Peru: 'Peru',
            Chile: 'Chile',
            Bolivia: 'Bolivia'
        }
        
    });

    if (pais) {
        Swal.fire({
            title: `Bienvenido! Seleccionaste ${pais}`
        })
    }


})()


