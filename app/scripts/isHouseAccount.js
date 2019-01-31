function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

export default function(uuid) {
    uuid = uuid.toUpperCase();
    return inArray(uuid, [
		"16D58CF2-FD88-4A49-972B-6F60054BF023", // (phonetworks.org, graphjs.com)
		"07660876-C7E1-44A4-86C3-754799733FF0", //  ( "http://138.68.105.127;https://www.emresokullu.com;http://www.emresokullu.com;https://emresokullu.com;http://blog.emresokullu.com;https://blog.emresokullu.com;http://138.68.105.127")
		"4B36F125-3D18-4E0C-AA8B-3D951C27F376", // ("http://wannapoly.com")
		"CF8A4452-B3A4-4BD3-833F-6C7E0D7D2431", // ("https://blocksplain.com")
		"189B783E-6C5C-4B3B-8960-4E5092BED5EA", // ("http://tr.erisenlaw.com") 
		"B686AAD9-7436-402E-A75F-12169AB028EC", // ("http://chrismessina.me")
		"D14139B2-3BBB-43F1-850E-87E399DB0A16" // ("http://prelrik.com")
	]);
}   