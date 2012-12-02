#pragma strict

private var menuAreaNormalized : Rect;

var menuSkin : GUISkin;
var beepSound : AudioClip;
var menuArea : Rect;
var playButton : Rect;
var instructionsButton : Rect;
var quitButton : Rect;

function Start() {
	menuAreaNormalized = Rect(
		menuArea.x * Screen.width - (menuArea.width * 0.5),
		menuArea.y * Screen.height - (menuArea.height * 0.5),
		menuArea.width,
		menuArea.height
	);
}

function OnGUI() {
	GUI.skin = menuSkin;
	
	GUI.BeginGroup(menuAreaNormalized);
	
	if(GUI.Button(Rect(playButton), 'Play')) {
		audio.PlayOneShot(beepSound);
	}
	
	if(GUI.Button(Rect(instructionsButton), 'Instructions')) {
		audio.PlayOneShot(beepSound);
	}
	
	if(GUI.Button(Rect(quitButton), 'Quit')) {
		audio.PlayOneShot(beepSound);
	}
	
	GUI.EndGroup();
}

@script RequireComponent(AudioSource)