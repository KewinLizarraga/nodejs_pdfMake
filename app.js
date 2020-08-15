const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = require("./fonts");
const styles = require("./styles");
const { content } = require("./pdfContent");

let dd = {
  content,
  styles,
};

const printer = new PdfPrinter(fonts);

let pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream("pdfs/pdfTest.pdf"));
pdfDoc.end();

console.log('PDF created');