window.locales = {"revision":{"download":"Descargar","revert":"Revertir"},"common":{"or":"O","cancel":"Cancelar","ok":"OK","got-it":"Got it"},"help":{"title":"Ayuda","contact":{"title":"Contactos","messenger":"Talk to us","github":"Reportar un problema","email":"Enviarnos un email"},"documents":"Documentos","yaml-meta":"Metadatos en YAML","slide":"Ejemplo de diapositiva","cheatsheet":"Ayudamemorias","example":"Ejemplo","syntax":{"h1":"Cabecera","ul":"Lista desordenada","ol":"Lista ordenada","todo":"Lista de tareas","blockquote":"Bloque de cita","b":"Fuente negrita","i":"Fuente itálica","strike":"Tachado","ins":"Texto subrayado","mark":"Texto marcado","anchor":"Enlace","img":"Imagen","code":"Código","embeded":"Externos","alert":"Esto es un área de alerta."}},"signin":{"via":"Ingresar via {{text}}"},"refresh":{"title":"Esta página necesita ser cargada de nuevo","incompatible":{"title":"Tienes una version del cliente incompatible.","content":"Cargar de nuevo para actualizar."},"upgrade":{"title":"¡Nueva versión disponible!","note":"Ver aquí las notas de publicación","content":"Actualizar para usar las nuevas funciones."},"auth":{"title":"El estado de tu usuario ha cambiado.","content":"Recargar para actualizar el estado de tu usuario."},"refresh":"Recargar"},"clipboard":{"title":"Importar del portapapeles","content":"Pega tu markdown o página web aquí...","clear":"Limpiar","import":"Importar"},"locked":{"title":"Esta nota está bloqueada","content":"Disculpa, solo el dueño puede editar esta nota."},"limit":{"title":"Haz alcanzado el límite","content1":"Disculpa, haz alcanzado la longitud máxima que puede tener esta nota.","content2":"Por favor, reduce el contenido o dividela en mas notas, ¡gracias!"},"gist-import":{"title":"Importar de un Gist","content":"Pega el URL de tu Gist aquí..."},"snippet-import":{"title":"Importar de Snippet","project":{"placeholder":"Elegir de un proyecto disponible"},"snippet":{"placeholder":"Elegir de un Snippet disponible"}},"snippet-export":{"title":"Exportar a Snippet","visibility":{"placeholder":"Elegir el nivel de visibilidad"},"export":"Exportar"},"delete":{"title":"¿Estás seguro?","yes":"Si, ¡hazlo!"},"header":{"import":{"clipboard":"Portapapeles"},"download":{"raw-html":"HTML puro"},"modes":{"edit":"Editar","both":"Ambos","view":"Ver"},"help":"Help","menu":"Menú","intro":"Introducción"},"footer":{"tos":"Terms of Service","releases":"Versiones","terms":"Terms"},"site":{"meta":{"description":"La mejor forma de escribir y compartir tu conocimiento en Markdown.","og":{"title-suffix":"Notas colaborativas en Markdown"}}},"next-app":{"editor-promotion":{"value-points":{"1":"Los autores valoran más las contribuciones de cuentas verificadas","2":"Recibe notificaciones de actualizaciones","3":"Vuelve a este documento con más facilidad","4":"Obtén un espacio de trabajo dedicado"},"headline":"Haz que tus contribuciones tengan más impacto 💪","continue":"Continuar","maybe-later":"Más tarde"}}};


document.addEventListener("DOMContentLoaded", function () {
    if (jQuery && $.fn.select2) {
        (function(n){"use strict";n.fn.select2.locales.es={formatMatches:function(e){return e===1?"Un resultado disponible, presione enter para seleccionarlo.":e+" resultados disponibles, use las teclas de direcci\xF3n para navegar."},formatNoMatches:function(){return"No se encontraron resultados"},formatInputTooShort:function(e,o){var r=o-e.length;return"Por favor, introduzca "+r+" car"+(r==1?"\xE1cter":"acteres")},formatInputTooLong:function(e,o){var r=e.length-o;return"Por favor, elimine "+r+" car"+(r==1?"\xE1cter":"acteres")},formatSelectionTooBig:function(e){return"S\xF3lo puede seleccionar "+e+" elemento"+(e==1?"":"s")},formatLoadMore:function(e){return"Cargando m\xE1s resultados\u2026"},formatSearching:function(){return"Buscando\u2026"},formatAjaxError:function(){return"La carga fall\xF3"}},n.extend(n.fn.select2.defaults,n.fn.select2.locales.es)})(jQuery);

        // overwrite format functions of already inited select2 instances
        var st2s = $('.select2-container').toArray();
        for (var i = 0, l = st2s.length; i < l; i++) {
            var st2 = st2s[i];
            var data = $(st2).data('select2');
            if (!data || !data.opts) continue;
            var opts = data.opts;
            opts.formatNoMatches = $.fn.select2.defaults.formatNoMatches;
            opts.formatInputTooShort = $.fn.select2.defaults.formatInputTooShort;
            opts.formatInputTooLong = $.fn.select2.defaults.formatInputTooLong;
            opts.formatSelectionTooBig = $.fn.select2.defaults.formatSelectionTooBig;
            opts.formatLoadMore = $.fn.select2.defaults.formatLoadMore;
            opts.formatSearching = $.fn.select2.defaults.formatSearching;
        }
    }
});



