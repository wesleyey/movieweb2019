(window.webpackJsonpmovieweb2019=window.webpackJsonpmovieweb2019||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),i=a(2),c=a.n(i),m=a(13),l=a(14),u=a(15),d=a(18),v=a(16),p=a(19),y=a(17),_=a.n(y);a(43);var f=function(e){e.id;var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t," / [",o,"]"),r.a.createElement("p",{className:"movie__summary"},n.slice(0,500),"...")))},w=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!0,movies:[]},a.getMovies=Object(m.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=download_count");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoaded:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,title:e.title,genres:e.genres.join(", "),year:e.year,summary:e.summary,poster:e.medium_cover_image})}))))}}]),t}(r.a.Component));o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d0c28b90.chunk.js.map