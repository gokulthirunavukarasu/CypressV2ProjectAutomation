const AdmZip = require("adm-zip");
 
async function createZipArchive() {
  try {
    const zip = new AdmZip();
    const outputFile = "reports.ZIP";
    zip.addLocalFolder("./reports");
    zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
  } catch (e) {
    console.log(`Something went wrong. ${e}`);
  }
}
 
createZipArchive();