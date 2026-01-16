let obj = JSON.parse($response.body);
obj.CanDownload = true
$done({status: $response.status, headers: $response.headers, body: JSON.stringify(obj) });
