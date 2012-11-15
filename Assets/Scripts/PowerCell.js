#pragma strict

var rotationSpeed : float = 100.0f;

function Start () {

}

function Update () {
	transform.Rotate(Vector3(0, rotationSpeed * Time.deltaTime, 0));
}

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		collider.gameObject.SendMessage('CellPickup');
		Destroy(gameObject);
	}
}