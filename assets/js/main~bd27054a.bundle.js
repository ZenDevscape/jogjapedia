"use strict";(self.webpackChunkjogjapedia=self.webpackChunkjogjapedia||[]).push([[459],{6997:(n,e,a)=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function r(n,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function s(n){var e="function"==typeof Map?new Map:void 0;return s=function(n){if(null===n||(a=n,-1===Function.toString.call(a).indexOf("[native code]")))return n;var a;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return c(n,arguments,l(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),u(t,n)},s(n)}function c(n,e,a){return c=o()?Reflect.construct:function(n,e,a){var t=[null];t.push.apply(t,e);var r=new(Function.bind.apply(n,t));return a&&u(r,a.prototype),r},c.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function u(n,e){return u=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},u(n,e)}function l(n){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},l(n)}a.d(e,{Z:()=>d});const d=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&u(n,e)}(d,n);var e,a,t,s,c=(e=d,a=o(),function(){var n,t=l(e);if(a){var r=l(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return i(this,n)});function d(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(n=c.call(this)).shadowDOM=n.attachShadow({mode:"closed"}),n}return t=d,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n      <style>\n        .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n          margin: 100px auto;\n        }\n\n        .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #e40000;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n        }\n\n        .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n        }\n\n        .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n        }\n\n        .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n        }\n\n        .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%,\n          70%,\n          100% {\n            -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n          }\n          35% {\n            -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n          }\n        }\n\n        @keyframes sk-cubeGridScaleDelay {\n          0%,\n          70%,\n          100% {\n            -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1);\n          }\n          35% {\n            -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1);\n          }\n        }\n      </style>\n\n      <div class="sk-cube-grid">\n        <div class="sk-cube sk-cube1"></div>\n        <div class="sk-cube sk-cube2"></div>\n        <div class="sk-cube sk-cube3"></div>\n        <div class="sk-cube sk-cube4"></div>\n        <div class="sk-cube sk-cube5"></div>\n        <div class="sk-cube sk-cube6"></div>\n        <div class="sk-cube sk-cube7"></div>\n        <div class="sk-cube sk-cube8"></div>\n        <div class="sk-cube sk-cube9"></div>\n      </div>'}}])&&r(t.prototype,s),d}(s(HTMLElement))},9178:(n,e,a)=>{a.d(e,{Z:()=>x});var t=a(9133),r=a.n(t),i=a(4654),s=a(5701),c=a(7187),o=a(8545),u=a(6510);function l(n,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}const d=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,a;return e=n,(a=[{key:"getTemplate",value:function(n,e){return'\n      <section class="search">\n        <div>\n          <div class="search__category-name">\n            <img data-src="/assets/img/icons/'.concat(n,'.png"\n              width="100px"\n              height="100px"\n              class="lazyload"\n              alt="').concat(e,'">\n            <h1>').concat(e,'</h1>\n          </div>\n          <div class="search__input">\n            <input class="search-query" type="text" placeholder="Cari">\n          </div>\n        </div>\n      </section>\n      <div class="content-wrapper">\n        <section class="item">\n          <div class="item__list">\n          </div>\n        </section>\n      </div>')}},{key:"runWhenUserIsSearching",value:function(n){r()(".search-query").on("change",(function(e){n(e.target.value)}))}},{key:"showItems",value:function(n,e){var a="";e.length>0?e.map((function(e){a+=(0,u.fC)(n,e)})):a=this._getEmptyItemTemplate(),r()(".item__list").empty().append(a),r()(".item__list").trigger("items:updated")}},{key:"_getEmptyItemTemplate",value:function(){return'\n      <div class="item__not-found">\n        <p>Tidak ada <em>item</em> yang ditemukan.</p>\n      </div>'}}])&&l(e.prototype,a),n}();function p(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function m(n,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var h=function(){function n(e){var a=e.catId,t=e.view,r=e.itemDataSource;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._catId=a,this._view=t,this._itemDataSource=r,this._showCategory()}var e,a,t,r;return e=n,a=[{key:"_showCategory",value:(t=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this._itemDataSource.getAllItems(this._catId);case 2:e=n.sent,this._displayItems(e);case 4:case"end":return n.stop()}}),n,this)})),r=function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(n){p(i,a,r,s,c,"next",n)}function c(n){p(i,a,r,s,c,"throw",n)}s(void 0)}))},function(){return r.apply(this,arguments)})},{key:"_displayItems",value:function(n){this._view.showItems(this._catId,n)}}],a&&m(e.prototype,a),n}();const v=h;function g(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function f(n,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var y=function(){function n(e){var a=e.catId,t=e.view,r=e.itemDataSource;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._catId=a,this._view=t,this._itemDataSource=r,this._listenToSearchRequestByUser()}var e,a,t,r;return e=n,a=[{key:"latestQuery",get:function(){return this._latestQuery}},{key:"_listenToSearchRequestByUser",value:function(){var n=this;this._view.runWhenUserIsSearching((function(e){n._searchItem(e)}))}},{key:"_searchItem",value:(t=regeneratorRuntime.mark((function n(e){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this._latestQuery=e.trim(),!(this.latestQuery.length>0)){n.next=7;break}return n.next=4,this._itemDataSource.searchItem(this._catId,this.latestQuery);case 4:a=n.sent,n.next=10;break;case 7:return n.next=9,this._itemDataSource.getAllItems(this._catId);case 9:a=n.sent;case 10:this._showFoundItems(a);case 11:case"end":return n.stop()}}),n,this)})),r=function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function s(n){g(i,a,r,s,c,"next",n)}function c(n){g(i,a,r,s,c,"throw",n)}s(void 0)}))},function(n){return r.apply(this,arguments)})},{key:"_showFoundItems",value:function(n){this._view.showItems(this._catId,n)}}],a&&f(e.prototype,a),n}();const b=y;function k(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function w(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var i=n.apply(e,a);function s(n){k(i,t,r,s,c,"next",n)}function c(n){k(i,t,r,s,c,"throw",n)}s(void 0)}))}}var _=new d;const x={render:function(){var n=this;return w(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r()("main").removeAttr("class"),r()("main").addClass("category"),r()("header").addClass("cancel-transparent"),r()("a.home").removeClass("menu-active"),r()("a.explore").removeClass("menu-active"),a=i.Z.parseActiveUrlWithoutCombiner(),e.next=8,o.Z.getCategory(a.id);case 8:if(n._category=e.sent,!n._category){e.next=12;break}return document.title="".concat(n._category.name,"  | JogjaPedia"),e.abrupt("return",_.getTemplate(n._category.id,n._category.name));case 12:return e.abrupt("return",s.Z.render());case 13:case"end":return e.stop()}}),e)})))()},afterRender:function(){var n=this;return w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n._category&&(new v({catId:n._category.id,view:_,itemDataSource:c.Z}),new b({catId:n._category.id,view:_,itemDataSource:c.Z}))}catch(n){console.log(n.message)}case 1:case"end":return e.stop()}}),e)})))()}}},7562:(n,e,a)=>{a.d(e,{Z:()=>m});var t=a(9133),r=a.n(t),i=a(9309),s=a.n(i),c=a(5701),o=a(4654),u=a(7187),l=a(6510);function d(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function p(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var i=n.apply(e,a);function s(n){d(i,t,r,s,c,"next",n)}function c(n){d(i,t,r,s,c,"throw",n)}s(void 0)}))}}a(7373);const m={render:function(){var n=this;return p(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r()("main").removeAttr("class"),r()("main").addClass("details"),r()("header").addClass("cancel-transparent"),r()("a.home").removeClass("menu-active"),r()("a.explore").removeClass("menu-active"),a=o.Z.parseActiveUrlWithoutCombiner(),e.next=8,u.Z.getItem(a.resource,a.id);case 8:if(n._item=e.sent,!n._item){e.next=19;break}document.title="".concat(n._item.name,"  | JogjaPedia"),e.t0=a.resource,e.next="wisata"===e.t0||"pendidikan"===e.t0?14:"kuliner"===e.t0||"kerajinan"===e.t0?15:16;break;case 14:return e.abrupt("return",(0,l.JP)(n._item));case 15:return e.abrupt("return",(0,l.wO)(n._item));case 16:return e.abrupt("return",null);case 17:e.next=20;break;case 19:return e.abrupt("return",c.Z.render());case 20:case"end":return e.stop()}}),e)})))()},afterRender:function(){return p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:new(s());case 1:case"end":return n.stop()}}),n)})))()}}},5701:(n,e,a)=>{a.d(e,{Z:()=>c});var t=a(9133),r=a.n(t);function i(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function s(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var s=n.apply(e,a);function c(n){i(s,t,r,c,o,"next",n)}function o(n){i(s,t,r,c,o,"throw",n)}c(void 0)}))}}const c={render:function(){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r()("main").removeAttr("class"),r()("main").addClass("error-404"),r()("header").addClass("cancel-transparent"),r()("a.home").removeClass("menu-active"),r()("a.explore").removeClass("menu-active"),document.title="Halaman Tidak Ditemukan | JogjaPedia",n.abrupt("return",'\n      <section class="hero">\n        <img data-src="/assets/img/heroes/404.svg" class="lazyload" alt="Error 404">\n        <p>Ups, halaman yang Anda cari tidak ditemukan.</p>\n        <a href="/#/">Beranda<i class="material-icons">arrow_forward</i></a>\n      </section>');case 7:case"end":return n.stop()}}),n)})))()},afterRender:function(){return s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})))()}}},5911:(n,e,a)=>{a.d(e,{Z:()=>s});var t=a(9133),r=a.n(t);function i(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}const s={render:function(){return(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r()("main").removeAttr("class"),r()("main").addClass("error-500"),r()("header").addClass("cancel-transparent"),r()("a.home").removeClass("menu-active"),r()("a.explore").removeClass("menu-active"),document.title="Kesalahan | JogjaPedia",n.abrupt("return",'\n      <section class="hero">\n        <img data-src="/assets/img/heroes/500.svg" class="lazyload" alt="Error 500">\n        <p>Terjadi kesalahan. Silakan coba lagi.</p>\n      </section>');case 7:case"end":return n.stop()}}),n)})),function(){var e=this,a=arguments;return new Promise((function(t,r){var s=n.apply(e,a);function c(n){i(s,t,r,c,o,"next",n)}function o(n){i(s,t,r,c,o,"throw",n)}c(void 0)}))})();var n}}},5802:(n,e,a)=>{a.d(e,{Z:()=>u});var t=a(9133),r=a.n(t),i=a(8545),s=a(6510);function c(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function o(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var i=n.apply(e,a);function s(n){c(i,t,r,s,o,"next",n)}function o(n){c(i,t,r,s,o,"throw",n)}s(void 0)}))}}const u={render:function(){return o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r()("main").removeAttr("class"),r()("main").addClass("explore"),r()("header").addClass("transparent"),r()("header").removeClass("cancel-transparent"),r()("a.home").removeClass("menu-active"),r()("a.explore").addClass("menu-active"),document.title="Jelajahi | JogjaPedia",n.abrupt("return",'\n      <section class="hero">\n        <div class="hero__inner">\n          <h1 class="hero__title">Jelajahi</h1>\n          <p class="hero__tagline">Temukan berbagai hal menarik di Yogyakarta</p>\n          <p class="hero__copyright">© Vendi Rizki K / CC BY-SA 4.0</p>\n        </div>\n      </section>\n      <section class="category">\n        <div class="category__list">\n        </div>\n      </section>');case 8:case"end":return n.stop()}}),n)})))()},afterRender:function(){return o(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.getAllCategories();case 3:e=n.sent,a=r()(".category__list"),e.forEach((function(n){a.append((0,s.h1)(n))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},8750:(n,e,a)=>{a.d(e,{Z:()=>h});var t=a(5300),r=a.n(t),i=a(9133),s=a.n(i),c=a(8972),o=a.n(c),u=a(9309),l=a.n(u),d=a(1081);function p(n,e,a,t,r,i,s){try{var c=n[i](s),o=c.value}catch(n){return void a(n)}c.done?e(o):Promise.resolve(o).then(t,r)}function m(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var i=n.apply(e,a);function s(n){p(i,t,r,s,c,"next",n)}function c(n){p(i,t,r,s,c,"throw",n)}s(void 0)}))}}a(2825),a(7373);const h={render:function(){return m(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s()("main").removeAttr("class"),s()("main").addClass("home"),s()("header").addClass("transparent"),s()("header").removeClass("cancel-transparent"),s()("a.explore").removeClass("menu-active"),s()("a.home").addClass("menu-active"),document.title="Beranda | JogjaPedia",n.abrupt("return",'\n      <section class="hero">\n        <div class="hero__inner">\n          <p class="hero__pretitle"><span class="pretitle__typed"></span> </p>\n          <h1 class="hero__title">Daerah Istimewa Yogyakarta</h1>\n          <p class="hero__copyright">© CEphoto, Uwe Aranas</p>\n        </div>\n      </section>\n      <div class="content-wrapper">\n        <section class="about">\n          <p class="notopmargin">Daerah Istimewa Yogyakarta (DIY) merupakan wilayah tertua kedua di Indonesia setelah Jawa Timur. Provinsi ini juga memiliki status istimewa atau otonomi khusus. Status ini adalah sebuah warisan dari zaman sebelum kemerdekaan, yaitu Kasultanan Ngayogyakarta Hadiningrat dan juga Kadipaten Paku Alaman sebagai cikal bakal DIY.</p>\n          <p>Wilayah DIY terletak di bagian selatan Pulau Jawa, berbatasan dengan Provinsi Jawa Tengah. DIY memiliki banyak sekali tempat wisata kekinian serta syarat akan budaya. Selain itu, terdapat juga banyak keistimewaan lain seperti kuliner dan kerajinan, hal ini menjadikannya sebagai salah satu destinasi wisata yang wajib dikunjungi. Dengan populasi 3,689 juta orang, DIY selalu ramai dan meriah.</p>\n        </section>\n        <section id="about-carousel" class="carousel slide" data-bs-interval="2000" data-bs-ride="carousel">\n          <button class="carousel-control-prev" type="button" data-bs-target="#about-carousel" data-bs-slide="prev">\n            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n            <span class="visually-hidden">Previous</span>\n          </button>\n          <button class="carousel-control-next" type="button" data-bs-target="#about-carousel" data-bs-slide="next">\n            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n            <span class="visually-hidden">Next</span>\n          </button>\n          <div class="carousel-inner">\n            <a href="/assets/img/carousel/keraton-yogyakarta.jpg" class="carousel-item glightbox active" data-gallery="highlight" data-glightbox="title: Keraton Yogyakarta; description: © Gunawan Kartapranata / CC BY-SA 3.0;">\n              <img data-src="/assets/img/carousel/keraton-yogyakarta.jpg" class="lazyload d-block w-100" alt="Keraton Yogyakarta">\n              <p class="carousel__copyright">© Gunawan Kartapranata / CC BY-SA 3.0</p>\n              <div class="carousel-caption d-block">\n                <p>Keraton Yogyakarta</p>\n              </div>\n            </a>\n            <a href="/assets/img/carousel/universitas-gadjah-mada.jpg" class="carousel-item glightbox" data-gallery="highlight" data-glightbox="title: Universitas Gadjah Mada; description: © Risanprasetyo, Febri Ady Prasetyo / CC BY-SA 4.0;">\n              <img data-src="/assets/img/carousel/universitas-gadjah-mada.jpg" class="lazyload d-block w-100" alt="Universitas Gadjah Mada">\n              <p class="carousel__copyright">© Risanprasetyo, Febri Ady Prasetyo / CC BY-SA 4.0</p>\n              <div class="carousel-caption d-block">\n                <p>Universitas Gadjah Mada</p>\n              </div>\n            </a>\n            <a href="/assets/img/carousel/gudeg.jpg" class="carousel-item glightbox" data-gallery="highlight" data-glightbox="title: Gudeg; description: © Christian Razukas / CC BY-SA 2.0;">\n              <img data-src="/assets/img/carousel/gudeg.jpg" class="lazyload d-block w-100" alt="Gudeg">\n              <p class="carousel__copyright">© Christian Razukas / CC BY-SA 2.0</p>\n              <div class="carousel-caption d-block">\n                <p>Gudeg</p>\n              </div>\n            </a>\n            <a href="/assets/img/carousel/gerabah-kasongan.jpg" class="carousel-item glightbox" data-gallery="highlight" data-glightbox="title: Gerabah Kasongan; description: © Asri Nurhayati / CC BY-SA 4.0;">\n              <img data-src="/assets/img/carousel/gerabah-kasongan.jpg" class="lazyload d-block w-100" alt="Gerabah Kasongan">\n              <p class="carousel__copyright">© Asri Nurhayati / CC BY-SA 4.0</p>\n              <div class="carousel-caption d-block">\n                <p>Gerabah Kasongan</p>\n              </div>\n            </a>\n          </div>\n        </section>\n        <section class="history">\n          <h2>Sejarah</h2>\n          <p class="notopmargin">Dalam konteks historis, keberadaan DIY dimulai dari berdirinya Kasultanan Ngayogyakarta Hadiningrat berdasarkan Perjanjian Giyanti tahun 1755. Berawal dari sini, muncul suatu sistem pemerintahan yang teratur dan kemudian berkembang.</p>\n          <p>Pemerintah Hindia Belanda mengakui Kasultanan Ngayogyakarta Hadiningrat dan Kadipaten Pakualaman sebagai kerajaan yang berhak mengatur dan mengurus rumah tangga pemerintahannya sendiri yang dikenal dengan istilah <em>zilfbesturende landschappen</em>.</p>\n          <p>Pada masa pendudukan Jepang, Yogyakarta diakui sebagai Daerah Istimewa atau <em>Kooti</em> dengan <em>Koo</em> sebagai kepalanya, yakni Sri Sultan Hamengku Buwono IX. Di bawah <em>Kooti</em>, secara struktural ada wilayah-wilayah pemerintahan tertentu dengan para pejabatnya.</p>\n          <p>Setelah proklamasi kemerdekaan Republik Indonesia (RI), Sri Sultan Hamengku Buwono IX dan Sri Paku Alam VIII menyatakan kepada Presiden RI bahwa daerah Kasultanan Ngayogyakarta Hadiningrat dan Kadipaten Pakualaman menjadi bagian dari wilayah RI, bergabung menjadi satu kesatuan yang dinyatakan sebagai Daerah Istimewa Yogyakarta (DIY).</p>\n        </section>\n        <section class="leader">\n          <h2>Pemimpin Daerah</h2>\n          <div class="leader__list">\n            <div class="leader__governor">\n              <img data-src="/assets/img/leaders/gubernur.jpg" class="lazyload" alt="Gubernur">\n              <h3>Sri Sultan Hamengku Buwono X</h3>\n              <p>Gubernur</p>\n            </div>\n            <div class="leader__vice-governor">\n              <img data-src="/assets/img/leaders/wakil-gubernur.jpg" class="lazyload" alt="Wakil Gubernur">\n              <h3>Kanjeng Gusti Pangeran Adipati Aryo Paku Alam X</h3>\n              <p>Wakil Gubernur</p>\n            </div>\n          </div>\n        </section>\n        <section class="statistic">\n          <div class="statistic-wrapper">\n            <h2>Statistik COVID-19</h2>\n            <div class="counter-wrapper">\n              <div class="confirmed notopmargin">\n                <p class="counter">NaN</p>\n                <div>\n                  <p class="caption">Terkonfirmasi</p>\n                </div>  \n              </div>\n              <div class="active">\n                <p class="counter">NaN</p>\n                <div>\n                  <p class="caption">Dirawat</p>\n                </div>\n              </div>\n              <div class="recovered">\n                <p class="counter">NaN</p>\n                <div>\n                  <p class="caption">Sembuh</p>\n                </div>\n              </div>\n              <div class="deceased">\n                <p class="counter">NaN</p>\n                <div>\n                  <p class="caption">Meninggal</p>\n                </div>\n              </div>\n            </div>  \n            <div class="info">\n              <p class="last-date">Pembaruan terakhir: <b>NaN</b></p>\n              <p>Sumber: <b><a href="https://covid19.go.id/" target="_blank" rel="noopener">Satuan Tugas Penanganan COVID-19</a></b></p>\n            </div>\n          </div>\n        </section>\n      </div>\n      <section class="campaign">\n        <div class="campaign-wrapper">\n          <h2>Siap untuk menjelajah?</h2>\n          <p>Temukan berbagai hal menarik di Yogyakarta</p>\n          <a href="/#/explore">Jelajahi<i class="material-icons">arrow_forward</i></a>\n        </div>\n      <section>');case 8:case"end":return n.stop()}}),n)})))()},afterRender:function(){return m(regeneratorRuntime.mark((function n(){var e,a,t,i,c,u,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,new(o())(".pretitle__typed",{strings:["Selamat Datang di","Welcome to","Sugeng Rawuh wonten"],loop:!0,typeSpeed:60,backSpeed:30,backDelay:2e3}),new(l())({loop:!0,touchNavigation:!0}),e=new(r())(s()(".carousel")),"visible"===document.visibilityState&&e.cycle(),n.next=7,d.Z.getData();case 7:a=n.sent,t=a.lastDate,i=a.confirmed,c=a.recovered,u=a.deceased,p=a.active,s()(".last-date").empty().append("Pembaruan terakhir: <b>".concat(new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),"</b>")),s()(".confirmed .counter").empty().append(i.toLocaleString("id-ID")),s()(".active .counter").empty().append(p.toLocaleString("id-ID")),s()(".recovered .counter").empty().append(c.toLocaleString("id-ID")),s()(".deceased .counter").empty().append(u.toLocaleString("id-ID")),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(0),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[0,20]])})))()}}},6510:(n,e,a)=>{a.d(e,{h1:()=>t,fC:()=>r,wO:()=>i,JP:()=>s});var t=function(n){return'\n    <a class="category__item" href="/#/category/'.concat(n.id,'">\n      <img data-src="/assets/img/icons/').concat(n.id,'.png"\n        width="100px"\n        height="100px"\n        class="lazyload"\n        alt="').concat(n.name,'">\n      <h2>').concat(n.name,"</h2>\n    </a>")},r=function(n,e){return'\n  <a class="item__node" href="/#/'.concat(n,"/").concat(e.id,'">\n    <img data-src="').concat(e.picture.link||"https://picsum.photos/id/666/700/400?grayscale",'"\n      height="200"\n      class="lazyload"\n      alt="').concat(e.name,'">\n    <p>').concat(e.picture.license,'</p>\n    <div class="node__details">\n      <h3>').concat(e.name,'</h3>\n      <div class="node__description">\n        ').concat(e.description,"\n      </div>\n    </div>\n  </a>\n  ")},i=function(n){var e="",a=!0;return n.market.forEach((function(n){e+='<div class="market__item',a&&(e+=" notopmargin"),e+='">\n        <div class="market__identity">\n          <h3>'.concat(n.name,"</h3>\n          <p>").concat(n.location,'</p>\n        </div>\n        <iframe class="market__map"\n          src="').concat(n.map,'"\n          width="400" height="250" allowfullscreen="" loading="lazy">\n        </iframe>\n      </div>'),a=!1})),'\n    <div class="content-wrapper">\n      <section class="image">\n        <a href="'.concat(n.picture.link,'" class="glightbox" data-glightbox="title: ').concat(n.name,"; description: ").concat(n.picture.license,';">\n          <img data-src="').concat(n.picture.link,'"\n            class="lazyload"\n            alt="').concat(n.name,'">\n          <p>').concat(n.picture.license,'</p>\n        </a>\n      </section>\n      <section class="entity">\n        <div class="section-wrapper" tabindex="0">\n          <h1>').concat(n.name,'</h1>\n          <div class="entity__tag">\n            <span><i class="material-icons">sell</i>').concat(n.price,'</span>\n          </div>\n        </div>\n      </section>\n      <section class="details">\n        <div class="section-wrapper" tabindex="0">\n          <h2 class="notopmargin">Kategori</h2>\n          <p class="details__category">').concat(n.category,"</p>\n          <h2>Deskripsi</h2>\n          ").concat(n.description,'\n        </div>\n      </section>\n      <section class="market">\n        <div class="section-wrapper" tabindex="0">\n          <h2 class="notopmargin">Lapak Favorit</h2>\n          <div class="market-wrapper">\n            ').concat(e,"\n          </div>\n        </div>\n      </section>\n    </div>")},s=function(n){var e="",a=!0;return n.review.forEach((function(n){e+='<div class="review__item',a&&(e+=" notopmargin"),e+='">\n        <div class="review__identity">\n          <h3>'.concat(n.name,'</h3>\n        </div>\n        <p class="review__text">').concat(n.text,"</p>\n      </div>"),a=!1})),'\n    <div class="content-wrapper">\n      <section class="image">\n        <a href="'.concat(n.picture.link,'" class="glightbox" data-glightbox="title: ').concat(n.name,"; description: ").concat(n.picture.license,';">\n          <img data-src="').concat(n.picture.link,'"\n            class="lazyload"\n            alt="').concat(n.name,'">\n          <p>').concat(n.picture.license,'</p>\n        </a>\n      </section>\n      <section class="entity">\n        <div class="section-wrapper" tabindex="0">\n          <h1>').concat(n.name,'</h1>\n          <div class="entity__tag">\n            <span><i class="material-icons">star</i>').concat(n.rating,'</span>\n          </div>\n        </div>\n      </section>\n      <section class="details">\n        <div class="section-wrapper" tabindex="0">\n          <h2 class="notopmargin">Kategori</h2>\n          <p class="details__category">').concat(n.category,"</p>\n          <h2>Deskripsi</h2>\n          ").concat(n.description,"\n          <h2>Lokasi</h2>\n          <p>").concat(n.location,'</p>\n          <iframe class="details__map"\n            src="').concat(n.map,'"\n            width="400" height="250" allowfullscreen="" loading="lazy">\n          </iframe>\n        </div>\n      </section>\n      <section class="review">\n        <div class="section-wrapper" tabindex="0">\n          <h2 class="notopmargin">Ulasan</h2>\n          <div class="review-wrapper">\n            ').concat(e,"\n          </div>\n        </div>\n      </section>\n    </div>")}}}]);