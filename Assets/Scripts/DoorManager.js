#pragma strict

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0f;
var doorOpenTime : float = 3.0f;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

function Start () {

}

function Update () {
	if(doorIsOpen) {
		doorTimer += Time.deltaTime;
		
		if(doorTimer >= doorOpenTime) {
			MoveDoor(false, 'doorshut', doorShutSound);
			doorTimer = 0;
		}
	}
}

function CheckDoor() {
	if(! doorIsOpen) {
		MoveDoor(true, 'dooropen', doorOpenSound);
	}
}

function MoveDoor(open : boolean, animation : String, sound : AudioClip) {
	doorIsOpen = open;
	
	audio.PlayOneShot(sound);
	transform.parent.animation.Play(animation);
}