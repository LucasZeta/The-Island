#pragma strict

var menuSkin : GUISkin;
var beepSound : AudioClip;
var menuArea : Rect;
var playButton : Rect;
var instructionsButton : Rect;
var quitButton : Rect;

function OnGUI() {
	GUI.skin = menuSkin;
	
	GUI.BeginGroup(menuArea);
	
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