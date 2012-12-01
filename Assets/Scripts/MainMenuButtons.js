#pragma strict

var beepSound : AudioClip;
var levelToLoad : String;
var normalTexture : Texture2D;
var hoverTexture : Texture2D;

function OnMouseEnter() {
	guiTexture.texture = hoverTexture;
}

function OnMouseExit() {
	guiTexture.texture = normalTexture;
}

function OnMouseUp() {
	if(levelToLoad != '') {
		audio.PlayOneShot(beepSound);
		
		yield new WaitForSeconds(0.35f);
		Application.LoadLevel(levelToLoad);
	}
}

@script RequireComponent(AudioSource)