#!/bin/bash

# Directorio donde están tus imágenes
imageDir="../assets/images/clubs"

# Archivo de salida
outFile="imageImports.js"

# Comienza el array en el archivo de salida
echo "const images = [" > $outFile

# Itera sobre cada archivo webp en el directorio
for file in $imageDir/*.webp
do
    # Obtiene el nombre del archivo sin el directorio
    base=$(basename "$file")

    # Obtiene el título del archivo, reemplazando los guiones bajos por espacios y quitando la extensión .webp
    title="${base//_/ }"
    title="${title//.webp/}"

    # Añade la línea al archivo de salida
    echo "  { title: '$title', path: require('./assets/images/clubs/$base') }," >> $outFile
done

# Cierra el array en el archivo de salida
echo "];" >> $outFile

# Añade la línea para exportar el array
echo "export default images;" >> $outFile

# Imprime que ha terminado
echo "Archivo generado: $outFile"
