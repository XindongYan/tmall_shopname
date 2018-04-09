var cheerio = require('cheerio');
var https = require('https');
var Iconv = require('iconv-lite')

url = "https://detail.tmall.com/item.htm?id=558760911386";

var opt = {
  path: '/item.htm?id=558760911386',
  methods: 'GET',
  hostname: 'detail.tmall.com',
  headers: {
    Referer: url,
    'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36",
    'cookie': "tk_trace=1; cna=xsrrEFh9x0YCAT2h+XuGDM9f; cookie2=139247922438ac2dd864f4acde3e8657; t=d51e6a3618a7c20f9d0e1b7dddeb8471; _tb_token_=5be5e679e333b; hng=CN%7Czh-CN%7CCNY%7C156; enc=fFkDSgeuDra%2BitvBFjB9rX%2FJ00JmFbT%2BWmwjz0TD13tYO%2BJfNaf0qCpOme3YsgmKhhq9e8xWpalNKsV8GpjjHg%3D%3D; uc1=cookie16=UIHiLt3xCS3yM2h4eKHS9lpEOw%3D%3D&cookie21=VFC%2FuZ9ainBZ&cookie15=UtASsssmOIJ0bQ%3D%3D&existShop=false&pas=0&cookie14=UoTePTe9WsJFZg%3D%3D&tag=8&lng=zh_CN; uc3=nk2=G4mvQUJ%2Bm7c%3D&id2=UU8BpJ8AlY%2BaAA%3D%3D&vt3=F8dBz4PB%2F97EjjlIjA0%3D&lg2=W5iHLLyFOGW7aA%3D%3D; tracknick=xingyenf; lgc=xingyenf; csg=a17a81ba; cq=ccp%3D1; pnm_cku822=098%23E1hv69vUvbpvUvCkvvvvvjiPPFMU0jibn2zp6jEUPmPyljiEPFsWgjYRPLFwljlHiQhvCvvvpZpPvpvhvv2MMgyCvvOCvhEC0WAivpvUvvCCUTfHCQ7tvpvIvvCvxQvvvUUvvhoMvvvCIvvvBZZvvUhpvvCHBpvv9OUvvhoMvvvC1pyCvhQC3ByXj4ZAhCkaU6bnDBmOjC6AxYjxRLwp%2B3%2BdaNoAdBkK465X3fyBHdBYBnLwe1OqrADn9Wma%2BfmtEpchtC6t%2BFIlBqev%2Bu0fd56OvphvC9mvphvvv2yCvvpvvhCv; isg=BN_f5A2m-V0izP069OV6LlwnbjWp7EiyyPfOSHEsKA7VAP-CeRTDNl2xxpB-mAte",
  }
}
var req = https.request(opt, (res) => {
  var result = ''
  res.on('data', (chun) => {
    chun = Iconv.decode(chun, 'GBK')
    var $ = cheerio.load(chun);
    var t = $('a.slogo-shopname').each((i, e) => {
      console.log($(e).text());
    })
  });
});
req.on('error', (e) => {
  console.log(e.message)
});
req.end();