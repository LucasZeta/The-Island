#pragma strict

private var doorIsOpen : boolean;
private var doorTimer : float = 0.0f;
private var currentDoor : GameObject;
var doorOpenTime : float = 3.0f;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;

function Start () {

}

function Update () {
	if(doorIsOpen) {
		doorTimer += Time.deltaTime;
		
		if(doorTimer >= doorOpenTime) {
			MoveDoor(currentDoor, false, 'doorshut', doorShutSound);
			doorTimer = 0;
		}
	}
}

function OnControllerColliderHit(hit : ControllerColliderHit) {
	if((hit.gameObject.tag == 'PlayerDoor') && !doorIsOpen) {
		currentDoor = hit.gameObject;
		MoveDoor(currentDoor, true, 'dooropen', doorOpenSound);
	}
}

function MoveDoor(door : GameObject, open : boolean, doorAnimation : String, doorSound : AudioClip) {
	doorIsOpen = open;
	
	door.audio.PlayOneShot(doorSound);
	door.transform.parent.animation.Play(doorAnimation);
}