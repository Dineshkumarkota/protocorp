exports.extractUrls = (data) => {
  const urls = [];

  data.forEach(row => {
    Object.values(row).forEach(value => {
      if (typeof value === "string" && value.startsWith("http")) {
        urls.push(value.trim());
      }
    });
  });

  return urls;
};