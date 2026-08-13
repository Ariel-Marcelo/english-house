# 🚀 Guía de Configuración: Google Sheets para Comentarios (100% Gratuito)

Sigue estos 4 sencillos pasos para conectar tu hoja de Google Sheets con tu página web **English House**:

---

### Paso 1: Crear la Hoja en Google Sheets
1. Ve a [Google Sheets](https://sheets.google.com) e inicia sesión.
2. Crea una nueva **Hoja de cálculo en blanco** y ponle de nombre `Comentarios_English_House`.
3. En la primera fila (Fila 1), coloca los siguientes encabezados en las columnas A, B, C, D, E:
   - **A1**: `id`
   - **B1**: `name`
   - **C1**: `comment`
   - **D1**: `role`
   - **E1**: `rating`
   - **F1**: `date`

---

### Paso 2: Agregar el Script de Google Apps Script
1. En el menú superior de tu Google Sheet, haz clic en **Extensiones** > **Apps Script**.
2. Borra todo el código que aparece por defecto y pega el siguiente código:

```javascript
function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var comments = [];
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][1] && data[i][2]) { // Requiere Nombre y Comentario
      comments.push({
        id: data[i][0] || "c-" + i,
        name: data[i][1],
        comment: data[i][2],
        role: data[i][3] || "Estudiante",
        rating: Number(data[i][4]) || 5,
        date: data[i][5] || ""
      });
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(comments))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var postData = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      postData.id || "c-" + Date.now(),
      postData.name || "",
      postData.comment || "",
      postData.role || "",
      postData.rating || 5,
      postData.date || new Date().toLocaleDateString("es-ES")
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Paso 3: Publicar como Aplicación Web (Web App)
1. Haz clic en el botón azul **Implementar** (arriba a la derecha) > **Nueva implementación**.
2. Haz clic en el icono de engranaje ⚙️ y selecciona **Aplicación web**.
3. Configura lo siguiente:
   - **Descripción**: `API Comentarios English House`
   - **Ejecutar como**: `Yo (tu correo)`
   - **Quién tiene acceso**: **`Cualquier persona`** *(¡Muy importante para que la web pueda leer y escribir!)*
4. Haz clic en **Implementar**.
5. Concede los permisos que Google te solicite (haz clic en *Configuración avanzada* > *Ir a Proyecto (no seguro)* > *Permitir*).
6. **Copia la URL de la aplicación web** que se genera (se parece a `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Paso 4: Conectar con tu sitio web
Puedes guardar tu URL de dos formas:

1. **En la página oculta**: Entra a `/crear-comentario?token=aW5ncmVzYXJjb21lbnRhcmlv`, haz clic arriba a la derecha en **Configurar Google Sheets** y pega tu URL.
2. **En tus variables de entorno (.env.local)**:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/TU_SCRIPT_ID/exec"
   ```

¡Listo! A partir de ahora, cada comentario enviado desde la página oculta se guardará automáticamente en tu hoja de Google Sheets, y podrás modificarlo o eliminarlo cuando desees.
