!function(n,t){function e(t){return n("<section>").addClass("ins-section").append(n("<header>").addClass("ins-section-header").text(t))}function r(e,r,i,a,s){return n("<div>").addClass("ins-selectable").addClass("ins-search-item").append(n("<header>").append(n("<i>").addClass("fa").addClass("fa-"+e)).append(null!=r&&""!=r?r:t.TRANSLATION.UNTITLED).append(i?n("<span>").addClass("ins-slug").text(i):null)).append(a?n("<p>").addClass("ins-search-preview").html(a):null).attr("data-url",s)}function i(n,i,a){var o,c,u=s(n);if(0===a.length)return null;switch(o=t.TRANSLATION[i],i){case"POSTS":case"PAGES":c=a.map(function(n){var e=n.firstOccur>20?n.firstOccur-20:0,i="";return delete n.firstOccur,u.forEach(function(t){var e=new RegExp(t,"gi");i=n.text.replace(e,'<em class="search-keyword"> '+t+" </em>")}),i=i?i.slice(e,e+80):n.text.slice(0,80),r("file",n.title,null,i,t.ROOT_URL+n.path)});break;case"CATEGORIES":case"TAGS":c=a.map(function(n){return r("CATEGORIES"===i?"folder":"tag",n.name,n.slug,null,n.permalink)});break;default:return null}return e(o).append(c)}function a(n,t){var e={};n.pages.concat(n.posts).forEach(function(n){n[t]&&n[t].forEach(function(n){e[n.name]=n})});var r=[];for(var t in e)r.push(e[t]);return r}function s(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function o(n,t,e){var r=s(n);return r.filter(function(n){return e.filter(function(e){if(!t.hasOwnProperty(e))return!1;var r=t[e].toUpperCase().indexOf(n);return r>-1?("text"==e&&(t.firstOccur=r),!0):void 0}).length>0}).length===r.length}function c(n){return{POST:function(t){return o(n,t,["title","text"])},PAGE:function(t){return o(n,t,["title","text"])},CATEGORY:function(t){return o(n,t,["name","slug"])},TAG:function(t){return o(n,t,["name","slug"])}}}function u(n,t,e,r){var i=0;return s(n).forEach(function(n){var a=new RegExp(n,"img");e.forEach(function(n,e){if(t.hasOwnProperty(n)){var s=t[n].match(a);i+=s?s.length*r[e]:0}})}),i}function l(n){return{POST:function(t){return u(n,t,["title","text"],[3,1])},PAGE:function(t){return u(n,t,["title","text"],[3,1])},CATEGORY:function(t){return u(n,t,["name","slug"],[1,1])},TAG:function(t){return u(n,t,["name","slug"],[1,1])}}}function f(n,t){var e=l(t),r=c(t),i=n.posts,s=n.pages,o=a(n,"tags"),u=a(n,"categories");return{posts:i.filter(r.POST).sort(function(n,t){return e.POST(t)-e.POST(n)}),pages:s.filter(r.PAGE).sort(function(n,t){return e.PAGE(t)-e.PAGE(n)}),categories:u.filter(r.CATEGORY).sort(function(n,t){return e.CATEGORY(t)-e.CATEGORY(n)}),tags:o.filter(r.TAG).sort(function(n,t){return e.TAG(t)-e.TAG(n)})}}function p(n,t){O.empty();for(var e in t)O.append(i(n,e.toUpperCase(),t[e]))}function d(n){if(0!==n.length){var t=C[0].clientHeight,e=n.position().top-C.scrollTop(),r=n[0].clientHeight+n.position().top;r>t+C.scrollTop()&&C.scrollTop(r-C[0].clientHeight),e<0&&C.scrollTop(n.position().top)}}function h(t){var e=n.makeArray(O.find(".ins-selectable")),r=-1;e.forEach(function(t,e){n(t).hasClass("active")&&(r=e)});var i=(e.length+r+t)%e.length;n(e[r]).removeClass("active"),n(e[i]).addClass("active"),d(n(e[i]))}function g(n){n&&n.length&&(location.href=n.attr("data-url"))}var T=n(".ins-search"),v=T.find(".ins-search-input"),C=T.find(".ins-section-wrapper"),O=T.find(".ins-section-container");T.parent().remove(".ins-search"),n("body").append(T),n.getJSON(t.CONTENT_URL,function(t){"#ins-search"===location.hash.trim()&&T.addClass("show"),v.on("input",function(){var e=n(this).val();p(e,f(t,e))}),v.trigger("input")}),n(document).on("click focus",".search-form-input",function(){T.addClass("show"),T.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){g(n(this))}).on("click",".ins-close",function(){T.removeClass("show")}).on("keydown",function(n){if(T.hasClass("show"))switch(n.keyCode){case 27:T.removeClass("show");break;case 38:h(-1);break;case 40:h(1);break;case 13:g(O.find(".ins-selectable.active").eq(0))}})}(jQuery,window.INSIGHT_CONFIG);