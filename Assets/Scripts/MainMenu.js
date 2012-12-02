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
		ButtonAction('Island');
	}
	
	if(GUI.Button(Rect(instructionsButton), 'Instructions')) {
		ButtonAction('Instructions');
	}
	
	if(GUI.Button(Rect(quitButton), 'Quit')) {
		ButtonAction('quit');
	}
	
	GUI.EndGroup();
}

function ButtonAction(levelName : String) {
	audio.PlayOneShot(beepSound);
	
	yield new WaitForSeconds(0.35);
	
	if(levelName != 'quit') {
		Application.LoadLevel(levelName);
	}
	else {
		Application.Quit();
	}
}

@script RequireComponent(AudioSource)