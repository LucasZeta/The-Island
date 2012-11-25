#pragma strict

private var doorIsOpen : boolean = false;

var doorOpenTime : float = 3.0f;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

function CheckDoor() {
	if(! doorIsOpen) {
		MoveDoor();
	}
}

function MoveDoor() {
	doorIsOpen = true;
	audio.PlayOneShot(doorOpenSound);
	transform.parent.animation.Play('dooropen');
	
	yield new WaitForSeconds(doorOpenTime);
	
	doorIsOpen = false;
	audio.PlayOneShot(doorShutSound);
	transform.parent.animation.Play('doorshut');
}