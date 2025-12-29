document.addEventListener('DOMContentLoaded', () => {
  const pdfViewer = document.getElementById('pdfViewer');
  // Prefer the `data` attribute already set in the HTML (so index.html controls filenames).
  // Fall back to the old filename only if no data attribute is present.
  const pdfFile = (pdfViewer && pdfViewer.getAttribute('data')) || 'Tiny_Seed_Mighty_Impact.pdf';
  const pdfDownload = document.getElementById('pdfDownload');
  const pdfTitle = document.getElementById('pdfTitle');
  const pdfOpenLink = document.getElementById('pdfOpenLink');

  if (pdfViewer) pdfViewer.setAttribute('data', pdfFile);
  if (pdfDownload) pdfDownload.setAttribute('href', pdfFile);
  if (pdfOpenLink) pdfOpenLink.setAttribute('href', pdfFile);
  if (pdfTitle) pdfTitle.textContent = pdfFile.replace(/[-_]/g, ' ');
});
