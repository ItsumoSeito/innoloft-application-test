function getVideoId(url) {
  var idIndex = url.search(/\?v=/);
  return url.slice(idIndex + 3).replace('/', '');
}

export default getVideoId;
