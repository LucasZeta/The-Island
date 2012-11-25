#pragma strict

var crosshair : GUITexture;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
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