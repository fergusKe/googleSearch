(function ($) {
  let apiUrl = 'https://us-central1-django20181225.cloudfunctions.net/google_search_api?key='
  let result = {
    "key": [
      ["googleAds", "googleAds"]
    ],
    "title": [
      ["Google Ads - Official Site | Be just a Google search away.Adads.google.com/", "Analyze your Google Ads data with R in minutes | Stitch - stitchdata.comAdwww.stitchdata.com/"]
    ],
    "content": [
      ["Be seen by customers the moment they're searching for what you offer. Start now. Show Up Online. Show Ads Locally. Advertise On Mobile. Advertise On YouTube. Help Customers Find You. Pick Your Budget. Styles: Search Ads, Banner Ads, Video Ads, Mobile Ads, App Ads.", "5 Million Rows of Data Per Month Free Forever. Unlimited Data During Trial. Try Free! Stitch Brings..."]
    ],
    "rank": [
      ["1-1", "1-2"]
    ]
  }

  $(function () {
    setEvent()
  })

  function setEvent() {
    $("#submit").on('click', function() {
      // googleAds,fb
      let keyword = $('#keyword').val()
      let url = apiUrl + keyword;
      console.log('url = ', url)

      $.get(url, function (result) {
        console.log(result)
        let html = ""
        for (let i = 0; i < result.key[0].length; i++) {
          html += "<tr class='d-flex'>"
          html += "<td class='col-md-2'>" + result.key[0][i] + "</td>"
          html += "<td class='col-md-4'>" + result.title[0][i] + "</td>"
          html += "<td class='col-md-4'>" + result.content[0][i] + "</td>"
          html += "<td class='col-md-2'>" + result.rank[0][i] + "</td>"
          html += "</tr>"
        }
        $(".table tbody").html(html)
      }, 'json')
    })
    
  }

})(jQuery)