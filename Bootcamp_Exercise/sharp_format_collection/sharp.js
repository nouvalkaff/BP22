// Save Image Attachment IPL
await sharp(files.attIPL[0].buffer)
  .toFormat("jpeg")
  .jpeg({
    quality: 70,
  })
  .toFile(`upload/billing/${attIPLName}`);

// ======================================+++++++++++++++======================================
// ======================================+++++++++++++++======================================
// ======================================+++++++++++++++======================================

await sharp(req.files.attachment[0].buffer).toFormat("jpeg").jpeg({ quality: 75 }).toFile(`./upload/visitorID/${IDCARD_FILE_RENAME}`);
