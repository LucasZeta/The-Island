#pragma strict

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		CoconutThrower.canThrow = true;
	}
}

function OnTriggerExit(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		CoconutThrower.canThrow = false;
	}
}