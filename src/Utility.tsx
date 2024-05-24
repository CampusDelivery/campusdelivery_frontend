export function getUser() {
    function escape(s:string) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape('name') + '=([^;]*)'));
    //console.log(document.cookie.match(name));
    return match ? match[1] : null;

}