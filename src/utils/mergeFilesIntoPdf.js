/* eslint-disable no-await-in-loop */
import { PDFDocument } from "pdf-lib";

const getScaledSize = (pageSize, image, xMargin = 0.1, yMargin = 0.07) => {
  let factor;
  let { width, height } = image;
  const { pageWidth, pageHeight } = pageSize;
  const boundedWidth = pageWidth - pageWidth * xMargin * 2;
  const boundedHeight = pageHeight - pageHeight * yMargin * 2;

  if (width > boundedWidth) {
    factor = parseFloat((boundedWidth / width).toFixed(2));
    ({ width, height } = image.scale(factor));
  }
  if (height > boundedHeight) {
    factor = parseFloat((boundedHeight / height).toFixed(2));
    ({ width, height } = image.scale(factor));
  }

  return { width, height };
};

const fetchAndFilterFiles = async filesOrUrls => {
  const files = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const file of filesOrUrls) {
    if (file instanceof File) {
      files.push(file);
    } else if (typeof file === "string") {
      files.push(await fetch(file));
    }
  }
  return files;
};

const mergeFilesIntoPdf = async (filesOrResponses, name) => {
  let pdf;
  let pages;
  let buffer;
  const xMargin = 0.05;
  const yMargin = 0.035;
  const doc = await PDFDocument.create();
  const embedFns = {
    "image/jpeg": "embedJpg",
    "image/png": "embedPng",
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const file of filesOrResponses) {
    const type = file.headers ? file.headers.get("content-type") : file.type;
    const embedFn = embedFns[type];
    if (type === "application/pdf") {
      buffer = await file.arrayBuffer();
      pdf = await PDFDocument.load(buffer);
      pages = await doc.copyPages(pdf, pdf.getPageIndices());
      pages.forEach(page => doc.addPage(page));
    } else if (embedFn) {
      buffer = await file.arrayBuffer();
      const page = doc.addPage();
      const image = await doc[embedFn](buffer);
      const { width: pageWidth, height: pageHeight } = page.getSize();
      const { width, height } = getScaledSize(
        { pageWidth, pageHeight },
        image,
        xMargin,
        yMargin,
      );
      page.drawImage(image, {
        x: pageWidth * xMargin,
        y: pageHeight - pageHeight * yMargin - height,
        width,
        height,
      });
    }
  }

  const blob = new Blob([await doc.save()], { type: "application/pdf" });
  // window.open(URL.createObjectURL(blob));
  return new File([blob], name);
};

export { fetchAndFilterFiles };
export default mergeFilesIntoPdf;
