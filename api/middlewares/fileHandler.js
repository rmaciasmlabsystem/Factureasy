const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const processFile = async (req, res, next) => {
    const fullPath = path.join(req.file.destination, req.file.filename);
    fs.readFile(fullPath, 'utf-8', (readError, data) => {
        if (readError) {
            // TODO(rmacias): crear la exception interna
            return;
        }
        const parser = new xml2js.Parser({
            explicitArray: false, // Evita que las etiquetas se conviertan siempre en arrays
            explicitRoot: false, // No incluir la raíz en el resultado
            ignoreAttrs: false, // Incluir atributos en el resultado
            mergeAttrs: false, // Evita que se incluya la propiedad $ en el resultado
            tagNameProcessors: [xml2js.processors.stripPrefix], // Eliminar el prefijo del nombre de la etiqueta
          });
          parser.parseString(data, (parseError, result) => {
            if (parseError) {
                // TODO(rmacias): crear la exception interna
                return;
            }
            req.body.xmlFile = result;
            fs.unlink(fullPath, (unlinkError) => {
                if (unlinkError) {
                    // TODO(rmacias): crear la exception interna
                    return;
                }
                next();
            });
        });

    });
/*

:
'./newUploads'
encoding:
'7bit'
fieldname:
'file'
filename:
'53860d5bacebd50d3a43cf8d323621e8'
mimetype:
'application/xml'
originalname:
'05ccd573-a26a-431f-9b1b-064800be7140.xml'
path:
'newUploads/53860d5bacebd50d3a43cf8d323621e8'

    */
};

module.exports = {
    processFile,
};