#!/bin/bash

# Función para imprimir el uso correcto del script
print_usage() {
    echo "Uso: $0 directorio"
    echo "Ejemplo: $0 /ruta/al/directorio"
}

# Verificar si se proporciona un directorio como argumento
if [ $# -ne 1 ]; then
    echo "Se necesita un directorio como argumento."
    print_usage
    exit 1
fi

# Verificar si el directorio existe
if [ ! -d "$1" ]; then
    echo "El directorio \"$1\" no existe."
    exit 1
fi

# Obtener la lista de archivos y directorios con acentos en su nombre
find "$1" | grep -E '[áéíóúÁÉÍÓÚ]' | while read -r item; do
    echo "Archivo o directorio con acento encontrado: $item"
done

echo "Búsqueda completada."
