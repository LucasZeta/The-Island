#pragma strict

var beepSound : AudioClip;
var levelToLoad : String;
var normalTexture : Texture2D;
var hoverTexture : Texture2D;
var quitButton : boolean = false;

function OnMouseEnter() {
	guiTexture.texture = hoverTexture;
}

function OnMouseExit() {
	guiTexture.texture = normalTexture;
}

function OnMouseUp() {
	audio.PlayOneShot(beepSound);
	
	yield new WaitForSeconds(0.35f);
	
	if(quitButton) {
		Application.Quit();
	}
	else if(levelToLoad != '') {
		Application.LoadLevel(levelToLoad);
	}
}

@script RequireComponent(AudioSource)