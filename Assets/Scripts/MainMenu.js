#pragma strict

private var menuAreaNormalized : Rect;
private var page : String;

var menuSkin : GUISkin;
var beepSound : AudioClip;
var menuArea : Rect;
var playButton : Rect;
var instructionsButton : Rect;
var instructions : Rect;
var quitButton : Rect;

function Start() {
	menuAreaNormalized = Rect(
		menuArea.x * Screen.width - (menuArea.width * 0.5),
		menuArea.y * Screen.height - (menuArea.height * 0.5),
		menuArea.width,
		menuArea.height
	);
	
	page = 'main';
}

function OnGUI() {
	GUI.skin = menuSkin;
	
	GUI.BeginGroup(menuAreaNormalized);
	
	if(page == 'main') {
		AddMainMenu();
	}
	else {
		AddInstructionsPage();
	}
	
	GUI.EndGroup();
}

function AddMainMenu() {
	if(GUI.Button(Rect(playButton), 'Play')) {
		ButtonAction('Island', 'level');
	}
	
	if(GUI.Button(Rect(instructionsButton), 'Instructions')) {
		ButtonAction('instructions', 'page');
	}
	
	if(GUI.Button(Rect(quitButton), 'Quit')) {
		ButtonAction('quit', 'level');
	}
}

function AddInstructionsPage() {
	GUI.Label(Rect(instructions), 'You awake on a mysterious island... Find a way to signal for help or face certain doom!');

	if(GUI.Button(Rect(quitButton), 'Back')) {
		ButtonAction('main', 'page');
	}
}

function ButtonAction(name : String, type : String) {
	audio.PlayOneShot(beepSound);
	
	yield new WaitForSeconds(0.35);
	
	if(type == 'level') {
		if(name != 'quit') {
			Application.LoadLevel(name);
		}
		else {
			Application.Quit();
		}
	}
	else {
		page = name;
	}
}

@script RequireComponent(AudioSource)