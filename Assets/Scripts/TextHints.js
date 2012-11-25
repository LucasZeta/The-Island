#pragma strict

var hintTime : float = 4.0f;

function ShowHint(message : String) {
	guiText.text = message;
	
	if(! guiText.enabled) {
		guiText.enabled = true;
		
		yield new WaitForSeconds(hintTime);
		guiText.enabled = false;
	}
}