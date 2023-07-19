#!/bin/bash

# Ruta del archivo de preguntas
preguntas_file="nunca.txt"

# Ruta del archivo de salida
js_file="NeverHaveIEver.js"

# Inicializar el archivo JavaScript
echo "export default cartas = [" > "$js_file"

# Contador de ID
id=1

# Leer el archivo de preguntas línea por línea
while IFS= read -r line || [[ -n "$line" ]]; do
  # Escapar las comillas dobles y barras invertidas en el texto de la pregunta
  escaped_line=$(echo "$line" | sed 's/\\/\\\\/g; s/"/\\"/g')

  # Generar el objeto JavaScript para cada pregunta
  echo "    {" >> "$js_file"
  echo "        id: $id," >> "$js_file"
  echo '        title: "Yo nunca nunca...",' >> "$js_file"
  echo "        description: \"$escaped_line\"," >> "$js_file"
  echo "    }," >> "$js_file"

  # Incrementar el ID
  ((id++))
done < "$preguntas_file"

# Cerrar el arreglo de objetos y exportar el arreglo en el archivo JavaScript
echo "]" >> "$js_file"

echo "El archivo JavaScript ha sido generado con éxito."
