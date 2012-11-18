#pragma strict

function ShowHint(message : String) {
	guiText.text = message;
	
	if(! guiText.enabled) {
		guiText.enabled = true;
	}
}