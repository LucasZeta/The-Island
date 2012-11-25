#pragma strict

var crosshair : GUITexture;
var textHints : GUIText;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		if(! CoconutWin.haveWon) {
			textHints.SendMessage('ShowHint', "\n\n\n\n\n\nThere's a power cell attached to this game,\nmaybe I'll win it if I can knock down the targets...");
		}
		CoconutThrower.canThrow = true;
		crosshair.enabled = true;
	}
}

function OnTriggerExit(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		CoconutThrower.canThrow = false;
		crosshair.enabled = false;
	}
}