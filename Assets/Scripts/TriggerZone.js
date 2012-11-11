#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		transform.FindChild('door').SendMessage('CheckDoor');
	}
}