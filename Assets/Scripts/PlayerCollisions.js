#pragma strict

private var currentDoor : GameObject;

function Start () {

}

function Update () {
	var hit : RaycastHit;
	
	if(Physics.Raycast(transform.position, transform.forward, hit, 3)) {
		if(hit.collider.gameObject.tag == 'PlayerDoor') {
			currentDoor = hit.collider.gameObject;
			currentDoor.SendMessage('CheckDoor');
		}
	}
}
