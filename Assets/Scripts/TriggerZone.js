#pragma strict

var lockedSound : AudioClip;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		var door : Transform = transform.FindChild('door');
		
		if(Inventory.GetCharge() == 4) {
			door.SendMessage('CheckDoor');
			
			if(GameObject.Find('PowerGUI')) {
				Destroy(GameObject.Find('PowerGUI'));
			}
		}
		else {
			door.audio.PlayOneShot(lockedSound);
			collider.gameObject.SendMessage('enableHUD');
		}
	}
}