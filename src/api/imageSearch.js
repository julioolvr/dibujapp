export default {
  // TODO: Mock, replace with real API
  search(query) {
    return Promise.resolve([
      {
        url:
          "https://static.comicvine.com/uploads/scale_small/6/61037/2165488-beartato.png"
      },
      { url: "http://nedroid.com/imagesb/sportsbeartato.png" },
      {
        url:
          "http://www.punchnels.com/wp-content/uploads/2011/10/beartato-cheerupface.jpeg"
      },
      {
        url:
          "http://static.tvtropes.org/pmwiki/pub/images/beartato-onlyadream_2618.gif"
      },
      { url: "http://www.nedroid.com/beartatoparty/chris-beartato-boo.png" },
      { url: "http://nedroid.com/comics/2011-04-27-beartato-shaving.png" },
      {
        url:
          "https://i2.wp.com/nedroid.com/comics/2010-10-06-beartato-regbot02.png"
      },
      { url: "http://nedroid.com/comics/2009-08-10-beartato-onearth.gif" }
    ]);
  }
};
