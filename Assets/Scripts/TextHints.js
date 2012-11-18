#pragma strict

var hintTime : float = 4.0f;
private var timer : float = 0.0f;

function Update() {
	if(guiText.enabled) {
		timer += Time.deltaTime;
		
		if(timer >= hintTime) {
			guiText.enabled = false;
			timer = 0.0f;
		}
	}
}

function ShowHint(message : String) {
	guiText.text = message;
	
	if(! guiText.enabled) {
		guiText.enabled = true;
	}
}