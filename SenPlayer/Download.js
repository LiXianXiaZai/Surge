let url = $request.url;

if(/\/emby\/users/i.test(url)) {
    let obj = JSON.parse($response.body);
    obj.CanDownload = true;
    $done({body: JSON.stringify(obj)});
} else if(/\/emby\/Shows/i.test(url)){
	let obj = JSON.parse($response.body);
	obj["Items"].forEach((item) => {
		item.CanDownload = true
	})
	$done({body: JSON.stringify(obj)});
} else if(/(PlaybackInfo|Videos)/i.test(url)) {
    let headers = $request.headers;
    headers['User-Agent'] = headers['User-Agent'].replace('_Download', '');
    $done({headers: headers});
} else {
    $done({});
}
