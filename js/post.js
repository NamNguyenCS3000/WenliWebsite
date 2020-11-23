var apiReq = new XMLHttpRequest();

document.getElementById('postSubmit').addEventListener('click', function (event) {
	var url = "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";
	var payload = {text:null};
	//var httpbinApiResp;	
	//payload.text = document.getElementById('httpbinInput').value;		
	apiReq.open('POST', url, true);
	apiReq.setRequestHeader('content-type', 'application/json');
	apiReq.addEventListener('load', function(){
		if(apiReq.status >= 200 && apiReq.status < 400){ 
			httpbinApiResp = JSON.parse(apiReq.responseText);
			//document.getElementById('httpbinReturn').textContent = httpbinApiResp.data;
		}else{
			console.log("Error: " + apiReq.status + " " + apiReq.statusText);
		}		
	})	
	apiReq.send(JSON.stringify(payload));	
	event.preventDefault();	
})