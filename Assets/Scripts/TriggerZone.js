#pragma strict

private var doorLocked : boolean = true;

var lockedSound : AudioClip;
var doorLight : Light;
var textHints : GUIText;

function OnTriggerEnter(collider : Collider) {
	if(collider.gameObject.tag == 'Player') {
		var door : Transform = transform.FindChild('door');
		var charge : int = Inventory.GetCharge();
		
		if((charge == 4) && doorLocked) {
			UnlockDoor();
		}
		
		if(! doorLocked) {
			door.SendMessage('CheckDoor');
			
			if(GameObject.Find('PowerGUI')) {
				Destroy(GameObject.Find('PowerGUI'));
			}
		}
		else {
			door.audio.PlayOneShot(lockedSound);
			
			if((charge > 0) && (charge < 4)) {
				textHints.SendMessage('ShowHint', "This door won't budge, guess it needs fully charging.\nMaybe more power cells will help.");
			}
			else {
				collider.gameObject.SendMessage('enableHUD');
				textHints.SendMessage('ShowHint', 'This door seems locked... maybe that generator needs power...');
			}
		}
	}
}

function UnlockDoor() {
	doorLocked = false;
	
	doorLight.color = Color.green;
}