
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.e29a7ace60c82e5d253a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/143.latest.pt-BR.d8a6c6ee48228979a154.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1266.latest.pt-BR.1dc4446c1cb5e296855a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.9f43ba93f8b7ea7298cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.1d1ddaea0819b314bc1a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/513.latest.pt-BR.b1cd78c67593501c1f78.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.pt-BR.22656802fb68d711ca78.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3395.latest.pt-BR.ca2b397151c5fdc03725.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.pt-BR.cd31ced301d35cd73b82.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.pt-BR.22fce6af562ac3387e1f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.aeb6604ea6bcaa1fd5ff.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/143.latest.pt-BR.2bca5c0a646fa4b3c156.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.179bae55beb22f7d9797.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.351af64f55430398bfe8.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  