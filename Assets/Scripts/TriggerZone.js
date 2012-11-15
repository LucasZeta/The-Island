#pragma strict

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		if(Inventory.GetCharge() == 4) {
			transform.FindChild('door').SendMessage('CheckDoor');
		}
	}
}